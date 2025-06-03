import React from 'react';
import styles from './Campaign.module.css';
import { Plus, Search, Filter, BarChart3 } from 'lucide-react';

interface CampaignModel {
  id: string | number;
  name: string;
  audience: string;
  size: number;
  sent: number;
  failed: number;
  date: string;
  status: string;
}

// interface CampaignProps {
//   // setActiveTab: (tab: string) => void;
// }

const mockCampaigns: CampaignModel[] = [
  { id: 1, name: 'Winter Sale Campaign', audience: 'High Spenders', size: 156, sent: 142, failed: 14, date: '2024-12-28', status: 'completed' },
  { id: 2, name: 'Win-back Inactive Users', audience: 'Inactive 90+ days', size: 89, sent: 78, failed: 11, date: '2024-12-25', status: 'completed' },
  { id: 3, name: 'New Year Offers', audience: 'All Active Users', size: 234, sent: 210, failed: 24, date: '2024-12-31', status: 'completed' }
];

const Campaign: React.FC = () => {
  const campaigns = mockCampaigns;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Campaign History</h2>
        <button
          onClick={() => {}}
          className={styles.newCampaignBtn}
          aria-label="Create new campaign"
        >
          <Plus className={styles.icon} />
          New Campaign
        </button>
      </div>

      {/* Campaign List */}
      <div className={styles.campaignList}>
        <div className={styles.listHeader}>
          <div className={styles.listTitle}>All Campaigns</div>
          <div className={styles.actions}>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search campaigns..."
                className={styles.searchInput}
                aria-label="Search campaigns"
              />
            </div>
            <button className={styles.filterBtn} aria-label="Filter campaigns">
              <Filter className={styles.filterIcon} />
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Audience</th>
                <th>Size</th>
                <th>Delivered</th>
                <th>Failed</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className={styles.tableRow}>
                  <td className={styles.campaignName}>{campaign.name}</td>
                  <td className={styles.audience}>{campaign.audience}</td>
                  <td className={styles.size}>{campaign.size}</td>
                  <td className={styles.sent}>{campaign.sent}</td>
                  <td className={styles.failed}>{campaign.failed}</td>
                  <td className={styles.date}>{campaign.date}</td>
                  <td>
                    <span className={styles.statusBadge}>{campaign.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaign Performance Insights */}
      <div className={styles.performanceInsights}>
        <div className={styles.performanceHeader}>
          <BarChart3 className={styles.performanceIcon} />
          <h3 className={styles.performanceTitle}>Campaign Performance Insights</h3>
        </div>
        <div className={styles.performanceGrid}>
          <div className={styles.performanceCard}>
            <h4>Overall Performance</h4>
            <p>
              Your campaigns have reached 479 customers with an average delivery rate of 89%. High-value
              segments show 5% better performance.
            </p>
          </div>
          <div className={styles.performanceCard}>
            <h4>Recommendations</h4>
            <p>
              Consider targeting inactive users with win-back campaigns. Tuesday 2-4 PM shows highest
              engagement rates for your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
