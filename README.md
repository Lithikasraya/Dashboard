# Solar Monitoring Dashboard UI

A modern, responsive solar monitoring dashboard built with React, TypeScript, and Vite. Track your solar power generation, consumption, and energy export/import in real-time with beautiful visualizations.

This is a code bundle for Solar Monitoring Dashboard UI. The original project is available at https://www.figma.com/design/w10PQ2CmAOTZUQQWwNP5c5/Solar-Monitoring-Dashboard-UI.

## Features

- **Live Power Monitoring**: Real-time tracking of solar power generation
- **Multiple Time Periods**: View data by day, week, or month
- **Interactive Charts**: Power curve visualization and net metering charts
- **Performance Metrics**: Track energy production, consumption, export, and import
- **Date Selection**: Navigate historical data with calendar date picker
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Sensor Monitoring**: Track temperature, wind speed, and other environmental factors

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Solarmonitoringdashboardui-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard view
│   ├── Analytics.tsx    # Analytics page
│   ├── Sensors.tsx      # Sensor monitoring
│   ├── Alerts.tsx       # Alert management
│   ├── Admin.tsx        # Admin panel
│   ├── Charts.tsx       # Chart components
│   └── ui/             # Reusable UI components
├── styles/             # Global styles
├── utils/              # Utility functions
└── main.tsx           # Application entry point
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Charting library for data visualization
- **Lucide React**: Beautiful icon set
- **Radix UI**: Accessible UI components

## Usage

### Viewing Dashboard Data

The dashboard provides three time period views:
- **Today**: Hourly power generation data
- **Week**: Daily aggregated data for the current week
- **Month**: Weekly aggregated data for the current month

### Selecting Custom Dates

Click the calendar button in the top-right to select a specific date for viewing historical data.

## Component Overview

### Dashboard
Main view showing live power generation, consumption statistics, and performance cards.

### Analytics
Detailed analytics and insights about your solar system's performance over time.

### Sensors
Monitor environmental conditions including temperature, wind speed, and humidity.

### Alerts
View and manage system alerts and notifications.

### Admin
Administrative panel for system configuration and user management.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Components

Components should be placed in the `src/components/` directory. UI components from shadcn/ui are located in `src/components/ui/`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is available for educational and personal use.

## Support

For issues or questions, please open an issue on the GitHub repository.
