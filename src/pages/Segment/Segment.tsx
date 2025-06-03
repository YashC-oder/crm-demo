import React, { useState } from "react";
import styles from "./Segment.module.css";
import { Plus, Zap, Eye, Send, Target, Users, TrendingUp } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  totalSpend: number;
  visits: number;
}

interface Rule {
  logic?: "AND" | "OR";
  field: string;
  operator: string;
  value: string;
}

const predefinedSegments = [
  {
    title: "High Value Customers",
    description: "Customers with ₹10K+ total spend",
    count: 3,
    Icon: Target,
    colorClass: styles.highValueCount,
  },
  {
    title: "Inactive Users",
    description: "No activity in 90+ days",
    count: 2,
    Icon: Users,
    colorClass: styles.inactiveCount,
  },
  {
    title: "Frequent Buyers",
    description: "5+ visits in last 6 months",
    count: 2,
    Icon: TrendingUp,
    colorClass: styles.frequentCount,
  },
];

const Segment: React.FC = () => {
  const [showSegmentBuilder, setShowSegmentBuilder] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [segmentName, setSegmentName] = useState("");
  const [segmentRules, setSegmentRules] = useState<Rule[]>([
    { field: "totalSpend", operator: ">", value: "" },
  ]);
  const [audiencePreview] = useState<Customer[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [campaignMessage, setCampaignMessage] = useState("");

  const processAIPrompt = () => {
    alert(`Processing AI prompt: ${aiPrompt}`);
  };

  const updateRule = (index: number, key: keyof Rule, value: string) => {
    const updated = [...segmentRules];
    updated[index] = { ...updated[index], [key]: value };
    setSegmentRules(updated);
  };

  const addRule = () => {
    setSegmentRules((prev) => [...prev, { logic: "AND", field: "totalSpend", operator: ">", value: "" }]);
  };

  const removeRule = (index: number) => {
    setSegmentRules((prev) => prev.filter((_, i) => i !== index));
  };

  const generateAIMessages = (type: string) => {
    switch (type) {
      case "win-back":
        return [
          "We miss you! Here's a special offer to welcome you back.",
          "It's been a while — come back and enjoy 20% off your next purchase.",
        ];
      case "high-value":
        return [
          "Thank you for being a top customer! Enjoy exclusive rewards.",
          "You’re one of our best customers! Here's a special gift for you.",
        ];
      case "general":
      default:
        return [
          "Check out our latest products and offers!",
          "Don't miss our upcoming sale this weekend.",
        ];
    }
  };

  const createCampaign = () => {
    alert("Campaign created and sent!");
    setShowSegmentBuilder(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Audience Segments</h2>
        <button
          onClick={() => setShowSegmentBuilder(true)}
          className={styles.createButton}
          aria-label="Create Segment"
        >
          <Plus className={styles.iconSmall} />
          Create Segment
        </button>
      </div>

      {showSegmentBuilder && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>Create Audience Segment</h3>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.aiInputSection}>
                <div className={styles.aiHeader}>
                  <Zap className={styles.iconPurple} />
                  <h4>AI-Powered Segment Builder</h4>
                </div>
                <div className={styles.aiInputRow}>
                  <input
                    type="text"
                    placeholder="e.g., People who haven't shopped in 6 months and spent over ₹5K"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className={styles.aiInput}
                  />
                  <button onClick={processAIPrompt} className={styles.aiButton}>
                    Generate Rules
                  </button>
                </div>
              </div>

              <div>
                <label className={styles.label}>Segment Name</label>
                <input
                  type="text"
                  value={segmentName}
                  onChange={(e) => setSegmentName(e.target.value)}
                  placeholder="e.g., High Value Customers"
                  className={styles.textInput}
                />
              </div>

              <div>
                <label className={styles.label}>Audience Rules</label>
                <div className={styles.rulesContainer}>
                  {segmentRules.map((rule, index) => (
                    <div key={index} className={styles.ruleRow}>
                      {index > 0 && (
                        <select
                          value={rule.logic}
                          onChange={(e) => updateRule(index, "logic", e.target.value)}
                          className={styles.selectLogic}
                          aria-label="Logic operator"
                        >
                          <option value="AND">AND</option>
                          <option value="OR">OR</option>
                        </select>
                      )}
                      <select
                        value={rule.field}
                        onChange={(e) => updateRule(index, "field", e.target.value)}
                        className={styles.selectField}
                        aria-label="Field selector"
                      >
                        <option value="totalSpend">Total Spend</option>
                        <option value="visits">Visits</option>
                        <option value="status">Status</option>
                        <option value="lastActive">Last Active</option>
                      </select>
                      <select
                        value={rule.operator}
                        onChange={(e) => updateRule(index, "operator", e.target.value)}
                        className={styles.selectOperator}
                        aria-label="Operator selector"
                      >
                        <option value=">">Greater than</option>
                        <option value="<">Less than</option>
                        <option value="=">=Equal to</option>
                        <option value="!=">Not equal to</option>
                      </select>
                      <input
                        type="text"
                        value={rule.value}
                        onChange={(e) => updateRule(index, "value", e.target.value)}
                        placeholder="Value"
                        className={styles.ruleValueInput}
                        aria-label="Rule value"
                      />
                      {segmentRules.length > 1 && (
                        <button
                          onClick={() => removeRule(index)}
                          className={styles.removeRuleBtn}
                          aria-label="Remove rule"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}

                  <button onClick={addRule} className={styles.addRuleBtn}>
                    + Add Rule
                  </button>
                </div>
              </div>

              {/* Audience Preview */}
              <div className={styles.audiencePreview}>
                <div className={styles.audienceHeader}>
                  <Eye className={styles.iconBlue} />
                  <h4>Audience Preview ({audiencePreview.length} customers)</h4>
                </div>
                <div className={styles.audienceList}>
                  {audiencePreview.slice(0, 5).map((customer) => (
                    <div key={customer.id} className={styles.audienceItem}>
                      {customer.name} - ₹{customer.totalSpend} spent, {customer.visits} visits
                    </div>
                  ))}
                  {audiencePreview.length > 5 && (
                    <p className={styles.audienceMore}>
                      ... and {audiencePreview.length - 5} more
                    </p>
                  )}
                </div>
              </div>

              {/* AI Message Suggestions */}
              <div>
                <label className={styles.label}>Campaign Message</label>
                <div className={styles.messageButtons}>
                  <button
                    onClick={() => setAiSuggestions(generateAIMessages("win-back"))}
                    className={styles.messageBtn}
                  >
                    Win-back Messages
                  </button>
                  <button
                    onClick={() => setAiSuggestions(generateAIMessages("high-value"))}
                    className={styles.messageBtn}
                  >
                    High-Value Messages
                  </button>
                  <button
                    onClick={() => setAiSuggestions(generateAIMessages("general"))}
                    className={styles.messageBtn}
                  >
                    General Messages
                  </button>
                </div>

                {aiSuggestions.length > 0 && (
                  <div className={styles.aiSuggestions}>
                    <p className={styles.suggestionsLabel}>AI Suggestions:</p>
                    {aiSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setCampaignMessage(suggestion)}
                        className={styles.suggestionBtn}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}

                <textarea
                  value={campaignMessage}
                  onChange={(e) => setCampaignMessage(e.target.value)}
                  placeholder="Enter your campaign message here..."
                  rows={3}
                  className={styles.textarea}
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                onClick={() => setShowSegmentBuilder(false)}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
              <button
                onClick={createCampaign}
                disabled={audiencePreview.length === 0}
                className={styles.sendBtn}
              >
                <Send className={styles.iconSmall} />
                Create &amp; Send Campaign
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Predefined Segments */}
      <div className={styles.predefinedGrid}>
        {predefinedSegments.map(({ title, description, count, Icon, colorClass }, idx) => (
          <div key={idx} className={styles.segmentCard}>
            <h3 className={styles.segmentTitle}>{title}</h3>
            <p className={styles.segmentDesc}>{description}</p>
            <div className={styles.segmentFooter}>
              <span className={`${styles.segmentCount} ${colorClass}`}>{count}</span>
              <Icon className={styles.segmentIcon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Segment;
