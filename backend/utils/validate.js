const Joi = require('joi');

// Common validation patterns
const phonePattern = /^\+?[1-9]\d{6,14}$/; // International phone format: +1234567890 (7-15 digits)
const whatsappPattern = /^\+?[1-9]\d{6,14}$/;

const registerSchema = Joi.object({
  firstName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'First name is required',
      'string.max': 'First name must not exceed 100 characters',
    }),
  lastName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'Last name is required',
      'string.max': 'Last name must not exceed 100 characters',
    }),
  company: Joi.string().trim().min(1).max(255).required()
    .messages({
      'string.empty': 'Company name is required',
    }),
  position: Joi.string().trim().min(1).max(255).required()
    .messages({
      'string.empty': 'Position is required',
    }),
  corporateEmail: Joi.string()
    .trim()
    .email({ tlds: { allow: ['com', 'net', 'org', 'edu', 'gov', 'io', 'co', 'ai', 'tech', 'info', 'biz'] } })
    .custom((value, helpers) => {
      const [, domainRaw = ''] = value.split('@');
      const domain = domainRaw.toLowerCase();

      const strictCommonDomains = [
        'gmail.com',
        'yahoo.com',
        'yahoo.com.ng',
        'outlook.com',
        'hotmail.com',
        'yandex.com',
        'yandex.ru',
      ];
      const commonRoots = ['gmail', 'yahoo', 'outlook', 'hotmail', 'yandex'];

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
      'string.email_common_typo': 'Please check your email domain (e.g. @gmail.com, @yahoo.com). It looks misspelled.',
    }),
  secondaryEmail: Joi.string().trim().email({ tlds: { allow: ['com', 'net', 'org', 'edu', 'gov', 'io', 'co', 'ai', 'tech', 'info', 'biz'] } }).optional().allow('', null),
  phone: Joi.string().trim().pattern(phonePattern).required()
    .messages({
      'string.empty': 'Phone number is required',
      'string.pattern.base': 'Please enter a valid phone number (e.g., +1234567890)',
    }),
  whatsapp: Joi.string().trim().pattern(whatsappPattern).required()
    .messages({
      'string.empty': 'WhatsApp number is required',
      'string.pattern.base': 'Please enter a valid WhatsApp number (e.g., +1234567890)',
    }),
  industry: Joi.string().trim().max(255).optional().allow('', null),
  city: Joi.string().trim().max(100).optional().allow('', null),
  country: Joi.string().trim().max(100).optional().allow('', null),
});


const adminLoginSchema = Joi.object({
  email: Joi.string().trim().email({ tlds: { allow: ['com', 'net', 'org', 'edu', 'gov', 'io', 'co', 'ai', 'tech', 'info', 'biz'] } }).required()
    .messages({
      'string.empty': 'Admin email is required',
      'string.email': 'Please enter a valid email address',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters',
    }),
});

const hackathonRegisterSchema = Joi.object({
  firstName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'First name is required',
    }),
  lastName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'Last name is required',
    }),
  email: Joi.string().trim().email({ tlds: { allow: ['com', 'net', 'org', 'edu', 'gov', 'io', 'co', 'ai', 'tech', 'info', 'biz'] } }).required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
    }),
  githubPortfolio: Joi.string().trim().uri().optional().allow('', null)
    .messages({
      'string.uri': 'Please enter a valid URL (e.g., https://github.com/...)',
    }),
  projectDescription: Joi.string().trim().min(10).max(2000).required()
    .messages({
      'string.empty': 'Project description is required',
      'string.min': 'Project description must be at least 10 characters',
      'string.max': 'Project description must not exceed 2000 characters',
    }),
});

const productShowcaseSchema = Joi.object({
  firstName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'First name is required',
    }),
  lastName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'Last name is required',
    }),
  email: Joi.string().trim().email({ tlds: { allow: ['com', 'net', 'org', 'edu', 'gov', 'io', 'co', 'ai', 'tech', 'info', 'biz'] } }).required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
    }),
  productLink: Joi.string().trim().uri().optional().allow('', null)
    .messages({
      'string.uri': 'Please enter a valid URL (e.g., https://myproduct.com)',
    }),
  projectDescription: Joi.string().trim().min(10).max(2000).required()
    .messages({
      'string.empty': 'Project description is required',
      'string.min': 'Project description must be at least 10 characters',
      'string.max': 'Project description must not exceed 2000 characters',
    }),
});

const speakerApplicationSchema = Joi.object({
  firstName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'First name is required',
    }),
  lastName: Joi.string().trim().min(1).max(100).required()
    .messages({
      'string.empty': 'Last name is required',
    }),
  email: Joi.string().trim().email({ tlds: { allow: ['com', 'net', 'org', 'edu', 'gov', 'io', 'co', 'ai', 'tech', 'info', 'biz'] } }).required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
    }),
  linkedinLink: Joi.string().trim().uri().optional().allow('', null)
    .messages({
      'string.uri': 'Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/...)',
    }),
  expertiseDescription: Joi.string().trim().min(10).max(2000).required()
    .messages({
      'string.empty': 'Expertise description is required',
      'string.min': 'Expertise description must be at least 10 characters',
      'string.max': 'Expertise description must not exceed 2000 characters',
    }),
});

module.exports = { registerSchema, adminLoginSchema, hackathonRegisterSchema, productShowcaseSchema, speakerApplicationSchema };
