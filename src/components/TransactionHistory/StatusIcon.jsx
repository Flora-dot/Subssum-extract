import { transactions } from "./transaction-data";
export const StatusIcon = ({status}) => {


    switch (status) {
      case 'Success':
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#47CA4C" fill-opacity="0.1"/>
            <path d="M14.4 10.4L10.8202 13.6L9.59998 12.5092M18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4 5.59998 17.3255 5.59998 16V7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998H16C17.3255 5.59998 18.4 6.67449 18.4 7.99998Z" stroke="#2DAE32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        );
      case 'Failed':
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#EE5D50" fill-opacity="0.1"/>
            <path d="M12 12L12 15.2M12 9.62817V9.60005M5.59998 16.0001L5.59998 7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998L16 5.59998C17.3255 5.59998 18.4 6.67449 18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4001 5.59998 17.3255 5.59998 16.0001Z" stroke="#EE5D50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            );
      case 'Initiated':
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#FFB547" fill-opacity="0.1"/>
            <path d="M12 12L12 15.2M12 9.62817V9.60005M5.59998 16.0001L5.59998 7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998L16 5.59998C17.3255 5.59998 18.4 6.67449 18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4001 5.59998 17.3255 5.59998 16.0001Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            );
      default:
        return null;
    }
  };
  