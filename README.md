## AI-FINANCE-TRACKER

## App Description

This AI financial tracker app enables users to seamlessly manage their finances by tracking income, expenses, and budgets. It offers real-time financial insights through visual charts and generates detailed monthly reports to keep users informed about their financial health. By leveraging AI-powered receipt scanning, users can easily log their expenses by uploading receipts, with the app automatically extracting relevant data. Additionally, the app supports recurring transactions and sends email alerts for budget updates and monthly summaries.

## Key Features

### 1. **User Authentication with Clerk**

- Clerk handles all user authentication, providing a secure login experience

### 2. **Rate Limiting and Bot Detection with Arcjet**

- Arcjet helps prevent abuse of the application by limiting the rate of requests and detecting and blocking bot traffic.

### 3. **Receipt Scanning with GEMINI_API**

- The application integrates **GEMINI_API** for receipt scanning. Users can upload receipts, and the API will extract relevant financial data, which is then stored in the app for easy tracking and reporting.

### 4. **Budget Management and Alerts**

- Users can set and track budgets. Inngest automates budget alerts, notifying users when they are close to reaching their limits.

### 5. **Automated Recurring Transactions**

- The application automates the processing of recurring transactions. Inngest triggers these transactions, ensuring that users’ financial activities are consistently updated without manual intervention.

### 6. **Monthly Financial Reports**

- Monthly financial reports are automatically generated using **GEMINI_API** and delivered to users. These reports summarize income, expenses, and offer actionable insights on how to improve financial management.

### 7. **Email Notifications**

- Users receive email notifications for important updates, such as budget alerts and monthly report summaries, using **RESEND_API** integrated through Inngest.

## How It Works

1. **Authentication**: Users log in using Clerk, which securely handles sessions.
2. **Transaction Management**: Users track their transactions, which are categorized as income or expenses, and are stored in Supabase.
3. **Budget Setup**: Users can set budgets and track progress via visual charts powered by Recharts.
4. **Receipt Scanning**: Users upload receipts, and GEMINI_API processes them to extract financial data, which is used in reports.
5. **Notifications and Reports**: Inngest runs cron jobs that trigger email alerts using RESEND_API and monthly reports, helping users stay on top of their finances.

## Setup Instructions

Follow these steps to get started with the app:

### 1. Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/upendar9999/AI-Finance-Tracker.git

## Install dependencies

npm install

## Set Up Environment Variables

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
DATABASE_URL=
DIRECT_URL=
ARCJET_KEY=
RESEND_API_KEY=
GEMINI_API_KEY=

## Run the app locally

npm run dev
