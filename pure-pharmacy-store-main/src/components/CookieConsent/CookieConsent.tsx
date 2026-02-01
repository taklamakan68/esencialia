import { useEffect } from "react";

// Declaración global para TypeScript
declare global {
  interface Window {
    cookieconsent?: {
      run: (config: any) => void;
      initialise?: (config: any) => void;
    };
  }
}

const CookieConsent = () => {
  useEffect(() => {
    // Verificar si ya está cargado
    const existingScript = document.querySelector(
      'script[src*="cookie-consent"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
      script.charset = "UTF-8";
      script.async = true;

      script.onload = () => {
        // Pequeño delay para asegurar que el script esté listo
        setTimeout(() => {
          if (typeof window.cookieconsent !== "undefined") {
            try {
              window.cookieconsent.run({
                notice_banner_type: "simple",
                consent_type: "express",
                palette: "light",
                language: "es",
                page_load_consent_levels: ["strictly-necessary"],
                notice_banner_reject_button_hide: false,
                preferences_center_close_button_hide: false,
                page_refresh_confirmation_buttons: false,
                website_privacy_policy_url:
                  "https://clinicaromerocantalejo.es/normativa",
              });
            } catch (error) {
              console.error("Error initializing cookie consent:", error);
            }
          }
        }, 500);
      };

      script.onerror = (error) => {
        console.error("Failed to load cookie consent script:", error);
      };

      document.head.appendChild(script);
    }

    // Crear botón de preferencias si no existe
    if (!document.getElementById("open_preferences_center")) {
      const button = document.createElement("a");
      button.id = "open_preferences_center";
      button.href = "#";
      button.setAttribute("role", "button");
      button.setAttribute("aria-label", "Preferencias de cookies");
      
      // Icono SVG
      const svgIcon = document.createElement("span");
      svgIcon.innerHTML = `
        <svg style="width: 16px; height: 16px; margin-right: 6px; vertical-align: middle;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      `;
      
      const textNode = document.createTextNode("Cookies");
      button.appendChild(svgIcon);
      button.appendChild(textNode);

      // Aplicar estilos
      Object.assign(button.style, {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        background: "hsl(var(--primary-accent))",
        color: "hsl(var(--primary-accent-foreground))",
        padding: "0.75rem 1.25rem",
        borderRadius: "0.5rem",
        textDecoration: "none",
        fontSize: "0.875rem",
        fontWeight: "500",
        zIndex: "10000",
        boxShadow: "var(--shadow-hover, 0 4px 12px rgba(0, 0, 0, 0.1))",
        transition: "all 0.2s ease",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      });

      // Efecto hover
      button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-2px)";
        button.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
        button.style.boxShadow = "var(--shadow-hover, 0 4px 12px rgba(0, 0, 0, 0.1))";
      });

      document.body.appendChild(button);
    }

    return () => {
      // No es necesario limpiar ya que queremos que persista
    };
  }, []);

  return null;
};

export default CookieConsent;