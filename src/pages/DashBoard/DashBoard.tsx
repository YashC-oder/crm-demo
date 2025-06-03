import React from 'react';
import styles from './Dashboard.module.css';
import { Users, MessageSquare, TrendingUp, BarChart3, Brain } from 'lucide-react';

interface Customer {
  id: number;
  name: string;
  email: string;
  totalSpend: number;
  visits: number;
  lastActive: string;
  status: string;
}

interface Campaign {
  id: number;
  name: string;
  audience: string;
  size: number;
  sent: number;
  failed: number;
  date: string;
  status: string;
}

const mockCustomers: Customer[] = [
  { id: 1, name: 'Mohit Sharma', email: 'mohit@example.com', totalSpend: 15000, visits: 5, lastActive: '2024-12-15', status: 'active' },
  { id: 2, name: 'Priya Patel', email: 'priya@example.com', totalSpend: 8500, visits: 2, lastActive: '2024-09-20', status: 'inactive' },
  { id: 3, name: 'Rahul Kumar', email: 'rahul@example.com', totalSpend: 25000, visits: 12, lastActive: '2024-12-28', status: 'active' },
  { id: 4, name: 'Sneha Gupta', email: 'sneha@example.com', totalSpend: 3200, visits: 1, lastActive: '2024-08-10', status: 'inactive' },
  { id: 5, name: 'Amit Singh', email: 'amit@example.com', totalSpend: 12000, visits: 7, lastActive: '2024-12-20', status: 'active' }
];

const mockCampaigns: Campaign[] = [
  { id: 1, name: 'Winter Sale Campaign', audience: 'High Spenders', size: 156, sent: 142, failed: 14, date: '2024-12-28', status: 'completed' },
  { id: 2, name: 'Win-back Inactive Users', audience: 'Inactive 90+ days', size: 89, sent: 78, failed: 11, date: '2024-12-25', status: 'completed' },
  { id: 3, name: 'New Year Offers', audience: 'All Active Users', size: 234, sent: 210, failed: 24, date: '2024-12-31', status: 'completed' }
];

const Dashboard: React.FC = () => {
  const customers = mockCustomers;
  const campaigns = mockCampaigns;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.label}>Total Customers</p>
              <p className={styles.value}>{customers.length}</p>
            </div>
            <Users className={styles.icon} color="#3B82F6" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.label}>Active Campaigns</p>
              <p className={styles.value}>{campaigns.length}</p>
            </div>
            <MessageSquare className={styles.icon} color="#10B981" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.label}>Delivery Rate</p>
              <p className={styles.value}>89%</p>
            </div>
            <TrendingUp className={styles.icon} color="#8B5CF6" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.label}>Total Revenue</p>
              <p className={styles.value}>₹63.7K</p>
            </div>
            <BarChart3 className={styles.icon} color="#F97316" />
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className={styles.insights}>
        <div className={styles.insightsHeader}>
          <Brain className={styles.icon} color="#2563EB" />
          <h3 className={styles.insightsTitle}>AI-Powered Insights</h3>
        </div>
        <div className={styles.insightsGrid}>
          <div className={styles.insightsCard}>
            <h4 className={styles.insightsCardTitle}>Campaign Performance Summary</h4>
            <p className={styles.insightsCardText}>
              Your recent campaigns reached 479 users with a 90% delivery rate. High-value customers (₹10K+ spend) showed 95% delivery success.
            </p>
          </div>
          <div className={styles.insightsCard}>
            <h4 className={styles.insightsCardTitle}>Optimal Send Time</h4>
            <p className={styles.insightsCardText}>
              Based on customer activity patterns, Tuesday 2-4 PM shows highest engagement rates for your audience segments.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.recent}>
        <div className={styles.recentHeader}>
          <h3 className={styles.recentHeaderTitle}>Recent Campaigns</h3>
        </div>
        <div className={styles.recentBody}>
          {campaigns.slice(0, 3).map(campaign => (
            <div key={campaign.id} className={styles.recentItem}>
              <div>
                <h4 className={styles.recentItemTitle}>{campaign.name}</h4>
                <p className={styles.recentItemText}>{campaign.audience} • {campaign.date}</p>
              </div>
              <div className={styles.recentItemValue}>
                <p className={styles.recentItemTitle}>{campaign.sent}/{campaign.size} sent</p>
                <p className={styles.recentItemText}>{Math.round((campaign.sent / campaign.size) * 100)}% success</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
