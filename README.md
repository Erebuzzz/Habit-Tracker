# Habit Tracker

## Overview
Habit Tracker is an open-source application designed to help users build and maintain positive habits. This tool enables tracking of daily, weekly, and monthly habits with an intuitive interface, detailed analytics, and customizable reminders to support personal growth and productivity.

## Features
- **Habit Management**: Create, edit, and delete habits with customizable frequency and goals
- **Progress Tracking**: Visual representation of habit completion streaks and success rates
- **Reminders**: Configurable notifications to help maintain consistency
- **Analytics Dashboard**: Detailed insights into habit performance over time
- **Categories**: Organize habits by different life areas (health, learning, productivity, etc.)
- **Exportable Data**: Download your habit history for external analysis
- **Dark/Light Mode**: Comfortable viewing in any environment
- **Cross-platform**: Available on web, iOS, and Android devices

## Screenshots
![Dashboard View](https://github.com/Erebuzzz/Habit-Tracker/raw/main/screenshots/dashboard.png)
![Analytics Page](https://github.com/Erebuzzz/Habit-Tracker/raw/main/screenshots/analytics.png)
![Mobile View](https://github.com/Erebuzzz/Habit-Tracker/raw/main/screenshots/mobile.png)

## Technology Stack
- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT, Google OAuth
- **Mobile**: React Native
- **Deployment**: Docker, AWS/Heroku

## Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/Erebuzzz/Habit-Tracker.git
cd Habit-Tracker

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start the development server
npm run dev
# or
yarn dev

# The application will be available at http://localhost:3000
```

### Docker Setup
```bash
# Build and run with Docker Compose
docker-compose up -d

# The application will be available at http://localhost:3000
```

## Usage Guide

### Creating a New Habit
1. Click the "+" button on the dashboard
2. Enter a habit name and description
3. Set frequency (daily, weekly, monthly)
4. Configure reminders (optional)
5. Assign to a category
6. Click "Save"

### Tracking Habits
1. Visit the dashboard to see today's habits
2. Check off completed habits
3. View streaks and progress directly on the dashboard
4. Add notes to your check-ins (optional)

### Analyzing Progress
1. Navigate to the Analytics tab
2. View completion rates, streaks, and trends
3. Filter by date range or categories
4. Export data as CSV or PDF

## API Documentation

The Habit Tracker provides a RESTful API for integration with other applications:

### Base URL
```
https://api.habittracker.app/v1
```

### Authentication
```
Authorization: Bearer YOUR_API_TOKEN
```

### Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /habits | Retrieve all habits |
| POST | /habits | Create a new habit |
| GET | /habits/:id | Get a specific habit |
| PUT | /habits/:id | Update a habit |
| DELETE | /habits/:id | Delete a habit |
| GET | /analytics | Get habit analytics |
| POST | /checkins | Record a habit check-in |

For detailed API documentation, please see our [API Reference](https://github.com/Erebuzzz/Habit-Tracker/blob/main/docs/API.md).

## Roadmap
- **Q2 2025**: Social features - share progress with friends
- **Q3 2025**: Habit templates and recommendation engine
- **Q4 2025**: AI-powered insights and personalized coaching
- **Q1 2026**: Integration with wearable devices for automatic tracking

## Contributing
We welcome contributions from the community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information on how to get involved.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
