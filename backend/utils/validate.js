const Joi = require('joi');

// Names: letters only — NO digits (covers O'Brien, Jean-Luc, etc.)
const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

// Company / Position / Industry: letters + digits allowed (e.g. "3M", "Web3 Labs")
const generalTextPattern = /^[A-Za-z0-9À-ÖØ-öø-ÿ .,'&()\-]+$/;

// City / Country: letters + spaces + hyphens/periods only — NO digits
const locationPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ .'-]+$/;

// Phone / WhatsApp: digits + optional leading + ONLY — NO letters
const phonePattern = /^\+?[1-9]\d{6,14}$/;

function nameField(label) {
  return Joi.string()
    .trim()
    .min(1)
    .max(100)
    .pattern(namePattern)
    .required()
    .messages({
      'string.empty': `${label} is required`,
      'string.min': `${label} must be at least 1 character`,
      'string.max': `${label} must not exceed 100 characters`,
      'string.pattern.base': `${label} contains invalid characters`,
    });
}

// For fields that allow digits (company, position, industry)
function generalTextField(label, min = 1, max = 255, required = true) {
  const base = Joi.string()
    .trim()
    .min(min)
    .max(max)
    .pattern(generalTextPattern)
    .messages({
      'string.empty': `${label} is required`,
      'string.min': `${label} must be at least ${min} character${min > 1 ? 's' : ''}`,
      'string.max': `${label} must not exceed ${max} characters`,
      'string.pattern.base': `${label} must contain only letters, numbers, and basic punctuation — no special characters`,
    });
  return required ? base.required() : base.optional().allow('', null);
}

// For city / country — letters only, no digits
function locationField(label, max = 100) {
  return Joi.string()
    .trim()
    .min(1)
    .max(max)
    .pattern(locationPattern)
    .optional()
    .allow('', null)
    .messages({
      'string.max': `${label} must not exceed ${max} characters`,
      'string.pattern.base': `${label} must contain only letters — numbers are not allowed`,
    });
}

// For phone / WhatsApp — digits + leading + only
function phoneField(label) {
  return Joi.string()
    .trim()
    .pattern(phonePattern)
    .required()
    .messages({
      'string.empty': `${label} is required`,
      'string.pattern.base': `${label} must be digits only (e.g. +2348012345678) — letters are not allowed`,
    });
}

const descriptionPattern = /^[A-Za-z0-9À-ÖØ-öø-ÿ .,'!?&()\-/:\n\r"@#%*+[\]{}]+$/;

function descriptionField(label, min = 10, max = 2000) {
  return Joi.string()
    .trim()
    .min(min)
    .max(max)
    .pattern(descriptionPattern)
    .required()
    .messages({
      'string.empty': `${label} is required`,
      'string.min': `${label} must be at least ${min} characters`,
      'string.max': `${label} must not exceed ${max} characters`,
      'string.pattern.base': `${label} contains invalid characters. Angle brackets, equals signs, backticks, and similar special characters are not allowed.`,
    });
}

const allowedTlds = ['com', 'net', 'org', 'edu', 'gov', 'io', 'co', 'ai', 'tech', 'info', 'biz', 'ng'];

const strictCommonDomains = [
  'gmail.com', 'yahoo.com', 'yahoo.com.ng', 'outlook.com',
  'hotmail.com', 'yandex.com', 'yandex.ru',
];
const commonRoots = ['gmail', 'yahoo', 'outlook', 'hotmail', 'yandex'];

const corporateEmailField = Joi.string()
  .trim()
  .lowercase()
  .email({ tlds: { allow: allowedTlds } })
  .max(254) // RFC 5321 max email length
  .custom((value, helpers) => {
    const [, domainRaw = ''] = value.split('@');
    const domain = domainRaw.toLowerCase();
    const isCommonRoot = commonRoots.some(root => domain.startsWith(root));
    const isExactCommon = strictCommonDomains.includes(domain);
    if (isCommonRoot && !isExactCommon) {
      return helpers.error('string.email_common_typo');
    }
    return value;
  })
  .required()
  .messages({
    'string.empty': 'Corporate email is required',
    'string.email': 'Please enter a valid corporate email address',
    'string.max': 'Email address is too long',
    'string.email_common_typo':
      'Please check your email domain (e.g. @gmail.com, @yahoo.com). It looks misspelled.',
  });


const registerSchema = Joi.object({
  firstName: nameField('First name'),
  lastName:  nameField('Last name'),
  company:   generalTextField('Company name', 1, 255, true),
  position:  generalTextField('Position', 1, 255, true),
  corporateEmail: corporateEmailField,
  secondaryEmail: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: allowedTlds } })
    .max(254)
    .optional()
    .allow('', null)
    .messages({
      'string.email': 'Please enter a valid secondary email address',
      'string.max': 'Secondary email address is too long',
    }),
  phone:    phoneField('Phone number'),
  whatsapp: phoneField('WhatsApp number'),
  industry: locationField('Industry', 255),
  city:     locationField('City'),
  country:  locationField('Country'),
});


const adminLoginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: allowedTlds } })
    .max(254)
    .required()
    .messages({
      'string.empty': 'Admin email is required',
      'string.email': 'Please enter a valid email address',
      'string.max': 'Email address is too long',
    }),
  
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^[\x20-\x7E]+$/)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters',
      'string.max': 'Password is too long',
      'string.pattern.base': 'Password contains unsupported characters',
    }),
});


const hackathonRegisterSchema = Joi.object({
  firstName: nameField('First name'),
  lastName:  nameField('Last name'),
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: allowedTlds } })
    .max(254)
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
      'string.max': 'Email address is too long',
    }),
  githubPortfolio: Joi.string()
    .trim()
    .uri({ scheme: ['https'] }) 
    .max(500)
    .optional()
    .allow('', null)
    .messages({
      'string.uri': 'Please enter a valid HTTPS URL (e.g., https://github.com/username)',
    }),
  projectDescription: descriptionField('Project description', 10, 2000),
});


const productShowcaseSchema = Joi.object({
  firstName: nameField('First name'),
  lastName:  nameField('Last name'),
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: allowedTlds } })
    .max(254)
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
      'string.max': 'Email address is too long',
    }),
  productLink: Joi.string()
    .trim()
    .uri({ scheme: ['https'] })
    .max(500)
    .optional()
    .allow('', null)
    .messages({
      'string.uri': 'Please enter a valid HTTPS URL (e.g., https://myproduct.com)',
    }),
  projectDescription: descriptionField('Project description', 10, 2000),
});


const speakerApplicationSchema = Joi.object({
  firstName: nameField('First name'),
  lastName:  nameField('Last name'),
  email: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: allowedTlds } })
    .max(254)
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
      'string.max': 'Email address is too long',
    }),
  linkedinLink: Joi.string()
    .trim()
    .uri({ scheme: ['https'] })
    .max(500)
    .custom((value, helpers) => {
      
      if (!value.includes('linkedin.com/')) {
        return helpers.error('string.linkedinOnly');
      }
      return value;
    })
    .optional()
    .allow('', null)
    .messages({
      'string.uri': 'Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/...)',
      'string.linkedinOnly': 'Please enter a valid linkedin.com URL',
    }),
  expertiseDescription: descriptionField('Expertise description', 10, 2000),
});


module.exports = {
  registerSchema,
  adminLoginSchema,
  hackathonRegisterSchema,
  productShowcaseSchema,
  speakerApplicationSchema,
};
