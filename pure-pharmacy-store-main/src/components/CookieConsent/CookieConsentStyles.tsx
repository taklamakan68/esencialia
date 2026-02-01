const CookieConsentStyles = () => {
  return (
    <style>{`
      /* Estilos personalizados para el consentimiento de cookies */
      .cc-nb-main-container {
        padding: 1.5rem !important;
        font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
        background: hsl(var(--card)) !important;
        border-top: 1px solid hsl(var(--border)) !important;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08) !important;
        z-index: 9999 !important;
      }
      
      .cc-nb-text {
        color: hsl(var(--foreground)) !important;
        font-size: 0.875rem !important;
        line-height: 1.5 !important;
      }
      
      .cc-nb-title {
        color: hsl(var(--foreground)) !important;
        font-weight: 600 !important;
        font-size: 1rem !important;
        margin-bottom: 0.5rem !important;
      }
      
      .cc-nb-okagree,
      .cc-nb-reject {
        background-color: hsl(var(--primary-accent)) !important;
        color: hsl(var(--primary-accent-foreground)) !important;
        border: none !important;
        border-radius: 0.5rem !important;
        padding: 0.75rem 1.5rem !important;
        font-weight: 500 !important;
        font-size: 0.875rem !important;
        transition: all 0.2s ease !important;
        cursor: pointer !important;
      }
      
      .cc-nb-okagree:hover,
      .cc-nb-reject:hover {
        background-color: hsl(152, 55%, 40%) !important;
        transform: translateY(-1px) !important;
      }
      
      .cc-nb-okagree:active,
      .cc-nb-reject:active {
        transform: translateY(0) !important;
      }
      
      .cc-nb-reject {
        background-color: hsl(var(--muted)) !important;
        color: hsl(var(--muted-foreground)) !important;
        border: 1px solid hsl(var(--border)) !important;
      }
      
      .cc-nb-reject:hover {
        background-color: hsl(var(--secondary)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      .cc-nb-link {
        color: hsl(var(--primary-accent)) !important;
        text-decoration: underline !important;
      }
      
      .cc-nb-link:hover {
        color: hsl(152, 55%, 40%) !important;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .cc-nb-main-container {
          padding: 1rem !important;
          flex-direction: column !important;
          gap: 0.75rem !important;
        }
        
        .cc-nb-buttons {
          width: 100% !important;
          display: flex !important;
          gap: 0.5rem !important;
        }
        
        .cc-nb-okagree,
        .cc-nb-reject {
          flex: 1 !important;
          padding: 0.75rem !important;
          font-size: 0.8125rem !important;
        }
        
        #open_preferences_center {
          bottom: 16px;
          right: 16px;
          padding: 0.625rem 1rem;
          font-size: 0.8125rem;
        }
      }
      
      @media (max-width: 480px) {
        .cc-nb-main-container {
          padding: 0.875rem !important;
        }
        
        .cc-nb-title {
          font-size: 0.9375rem !important;
        }
        
        .cc-nb-text {
          font-size: 0.8125rem !important;
        }
        
        #open_preferences_center {
          bottom: 12px;
          right: 12px;
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
        }
      }
    `}</style>
  );
};

export default CookieConsentStyles;