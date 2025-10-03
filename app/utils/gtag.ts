// Google Analytics utilities
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PWMQ4ZR6LB';

// Types for Google Analytics events
export interface GTagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for NU Nexus Club
export const trackInstagramClick = (eventName: string) => {
  event({
    action: 'click',
    category: 'Social Media',
    label: `Instagram - ${eventName}`,
  });
};

export const trackEmailClick = (emailType: string) => {
  event({
    action: 'click',
    category: 'Contact',
    label: `Email - ${emailType}`,
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Phone Call',
  });
};

export const trackInstagramFollow = () => {
  event({
    action: 'follow',
    category: 'Social Media',
    label: 'Instagram Follow',
  });
};

export const trackLinkedInClick = (memberName: string) => {
  event({
    action: 'click',
    category: 'Team',
    label: `LinkedIn - ${memberName}`,
  });
};

export const trackEventView = (eventName: string) => {
  event({
    action: 'view',
    category: 'Events',
    label: eventName,
  });
};

export const trackTeamMemberView = (memberName: string) => {
  event({
    action: 'view',
    category: 'Team',
    label: memberName,
  });
};
