/**
 * Authentic Elementor Pro JSON Templates
 * Can be downloaded and directly imported into WordPress via:
 * Elementor > Templates > Saved Templates > Import Templates (.json)
 */

export const ELEMENTOR_HOME_TEMPLATE_JSON = {
  version: "0.4",
  title: "NexaCore Solutions - Homepage (Elementor Flexbox Container)",
  type: "page",
  content: [
    {
      id: "nc_header_container",
      elType: "container",
      isInner: false,
      settings: {
        content_width: "full",
        boxed_width: { unit: "px", size: 1240 },
        flex_direction: "row",
        justify_content: "space-between",
        align_items: "center",
        padding: { unit: "px", top: 18, right: 24, bottom: 18, left: 24 },
        background_background: "classic",
        background_color: "rgba(255, 255, 255, 0.95)",
        css_classes: "nc-sticky-header"
      },
      elements: [
        {
          id: "nc_site_logo",
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "<span style='color:#0F172A;font-weight:800;'>NexaCore</span> <span style='color:#2563EB;'>Solutions</span>",
            header_size: "h3"
          }
        },
        {
          id: "nc_nav_menu",
          elType: "widget",
          widgetType: "nav-menu",
          settings: {
            layout: "horizontal",
            pointer: "underline",
            animation_line: "fade",
            custom_color: "#334155",
            custom_hover_color: "#2563EB"
          }
        },
        {
          id: "nc_header_cta",
          elType: "widget",
          widgetType: "button",
          settings: {
            text: "Get a Free Consultation",
            link: { url: "#contact" },
            button_type: "primary",
            background_color: "#2563EB"
          }
        }
      ]
    },
    {
      id: "nc_hero_section",
      elType: "container",
      isInner: false,
      settings: {
        content_width: "full",
        boxed_width: { unit: "px", size: 1200 },
        flex_direction: "row",
        min_height: { unit: "px", size: 680 },
        padding: { unit: "px", top: 80, right: 24, bottom: 60, left: 24 },
        background_background: "classic",
        background_color: "#F8FAFC"
      },
      elements: [
        {
          id: "nc_hero_left_col",
          elType: "container",
          isInner: true,
          settings: {
            width: { unit: "%", size: 55 },
            flex_direction: "column",
            gap: { unit: "px", size: 24 }
          },
          elements: [
            {
              id: "nc_hero_badge",
              elType: "widget",
              widgetType: "html",
              settings: {
                html: "<div class='nc-pill-badge'><span style='display:inline-block;width:8px;height:8px;border-radius:50%;background:#10B981;margin-right:6px;'></span> Enterprise SLA & Managed Cloud Operations</div>"
              }
            },
            {
              id: "nc_hero_title",
              elType: "widget",
              widgetType: "heading",
              settings: {
                title: "Intelligent Technology Solutions Built to Accelerate Business Growth",
                header_size: "h1",
                typography_font_family: "Plus Jakarta Sans",
                typography_font_weight: "800",
                title_color: "#0F172A"
              }
            },
            {
              id: "nc_hero_description",
              elType: "widget",
              widgetType: "text-editor",
              settings: {
                editor: "We empower mid-market companies with resilient cloud infrastructure, 24/7 proactive managed IT, and custom workflow automation. Eliminate downtime and protect your bottom line.",
                typography_font_family: "Inter",
                typography_font_size: { unit: "px", size: 18 },
                text_color: "#475569"
              }
            },
            {
              id: "nc_hero_buttons_container",
              elType: "container",
              isInner: true,
              settings: {
                flex_direction: "row",
                gap: { unit: "px", size: 14 }
              },
              elements: [
                {
                  id: "nc_hero_primary_btn",
                  elType: "widget",
                  widgetType: "button",
                  settings: {
                    text: "Schedule Free Discovery Call",
                    link: { url: "#consultation" },
                    background_color: "#2563EB"
                  }
                },
                {
                  id: "nc_hero_secondary_btn",
                  elType: "widget",
                  widgetType: "button",
                  settings: {
                    text: "Explore Services",
                    link: { url: "#services" },
                    background_color: "transparent",
                    text_color: "#0F172A",
                    border_border: "solid",
                    border_width: { unit: "px", top: 1, right: 1, bottom: 1, left: 1 },
                    border_color: "#CBD5E1"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "nc_hero_right_col",
          elType: "container",
          isInner: true,
          settings: {
            width: { unit: "%", size: 45 },
            flex_direction: "column",
            justify_content: "center"
          },
          elements: [
            {
              id: "nc_telemetry_card",
              elType: "widget",
              widgetType: "html",
              settings: {
                html: "<div class='nc-telemetry-status-box'><div style='font-weight:700;color:#0F172A;'>System Status: All Systems Operational</div><div style='color:#10B981;font-weight:600;font-size:24px;'>99.98% High Availability Uptime</div></div>"
              }
            }
          ]
        }
      ]
    },
    {
      id: "nc_stats_bar_container",
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1140 },
        flex_direction: "row",
        justify_content: "space-around",
        padding: { unit: "px", top: 32, right: 40, bottom: 32, left: 40 },
        background_background: "classic",
        background_color: "#FFFFFF",
        border_radius: { unit: "px", top: 16, right: 16, bottom: 16, left: 16 },
        box_shadow_box_shadow: { horizontal: 0, vertical: 10, blur: 25, spread: -5, color: "rgba(15,23,42,0.06)" }
      },
      elements: [
        {
          id: "nc_stat_1",
          elType: "widget",
          widgetType: "counter",
          settings: {
            starting_number: 80,
            ending_number: 99.4,
            prefix: "",
            suffix: "%",
            title: "Client Retention Rate"
          }
        },
        {
          id: "nc_stat_2",
          elType: "widget",
          widgetType: "counter",
          settings: {
            starting_number: 0,
            ending_number: 150,
            prefix: "",
            suffix: "+",
            title: "Completed Migrations"
          }
        },
        {
          id: "nc_stat_3",
          elType: "widget",
          widgetType: "counter",
          settings: {
            starting_number: 0,
            ending_number: 8,
            prefix: "< ",
            suffix: " min",
            title: "Average Support Response"
          }
        },
        {
          id: "nc_stat_4",
          elType: "widget",
          widgetType: "counter",
          settings: {
            starting_number: 0,
            ending_number: 34,
            prefix: "",
            suffix: "%",
            title: "Client Cost Optimization"
          }
        }
      ]
    },
    {
      id: "nc_services_container",
      elType: "container",
      isInner: false,
      settings: {
        content_width: "boxed",
        boxed_width: { unit: "px", size: 1200 },
        flex_direction: "column",
        padding: { unit: "px", top: 80, right: 24, bottom: 80, left: 24 },
        gap: { unit: "px", size: 36 }
      },
      elements: [
        {
          id: "nc_services_heading",
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Strategic Capabilities Engineered for Business Agility",
            header_size: "h2",
            align: "center",
            title_color: "#0F172A"
          }
        }
      ]
    }
  ]
};

export const ELEMENTOR_HEADER_TEMPLATE_JSON = {
  version: "0.4",
  title: "NexaCore Sticky Header Template",
  type: "header",
  content: [
    {
      id: "header_wrapper",
      elType: "container",
      settings: {
        content_width: "full",
        boxed_width: { unit: "px", size: 1240 },
        flex_direction: "row",
        justify_content: "space-between",
        align_items: "center",
        padding: { unit: "px", top: 16, right: 24, bottom: 16, left: 24 },
        background_color: "#FFFFFF",
        css_classes: "nc-sticky-header"
      }
    }
  ]
};

export const ELEMENTOR_FOOTER_TEMPLATE_JSON = {
  version: "0.4",
  title: "NexaCore 4-Column Footer Template",
  type: "footer",
  content: [
    {
      id: "footer_wrapper",
      elType: "container",
      settings: {
        content_width: "full",
        boxed_width: { unit: "px", size: 1240 },
        flex_direction: "row",
        background_color: "#0F172A",
        padding: { unit: "px", top: 60, right: 24, bottom: 40, left: 24 }
      }
    }
  ]
};
