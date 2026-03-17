require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { sequelize } = require('./models');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const hackathonRoutes = require('./routes/hackathonRoutes');
const productShowcaseRoutes = require('./routes/productShowcaseRoutes');
const speakerApplicationRoutes = require('./routes/speakerApplicationRoutes');

const { globalLimiter } = require('./middleware/rateLimiter');

const app = express();
const PORT = process.env.PORT || 5000;


// SECURE CORS CONFIG
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// GLOBAL SECURITY MIDDLEWARE
app.use(helmet());
app.use(cors(corsOptions));
app.use(globalLimiter);

// REQUEST PARSING WITH SIZE LIMITS (PROTECTION AGAINST LARGE PAYLOAD ATTACKS)
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));


app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/hackathon', hackathonRoutes);
app.use('/api/product-showcase', productShowcaseRoutes);
app.use('/api/speaker-application', speakerApplicationRoutes);


app.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is healthy.' });
});


app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});


app.use((err, req, res, next) => {
  console.error('[Global Error]', err.stack);
  res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
});


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('[DB] MySQL connection established successfully.');

    app.listen(PORT, () => {
      console.log(`[Server] Running on http://localhost:${PORT}`);
      console.log(`[Server] Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (err) {
    console.error('[DB] Unable to connect to MySQL database:', err.message);
    console.error('[DB] Ensure MySQL is running and config/config.json credentials are correct.');
    process.exit(1);
  }
}

startServer();