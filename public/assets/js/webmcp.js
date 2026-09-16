/* WebMCP tools for snaptapp.us. Separate file so CSP can stay script-src 'self'.
 * Registers tools via provideContext (Chrome WebMCP) and registerTool (skill). */
(function () {
  "use strict";

  var PAGES = {
    home: "/",
    products: "/products/",
    company: "/company/",
    support: "/support/",
    contact: "/contact/",
    privacy: "/legal/privacy/",
    terms: "/legal/terms/",
    apiDocs: "/docs/api/",
  };

  function overview() {
    return {
      name: "Snaptapp",
      url: "https://snaptapp.us/",
      description:
        "Independent studio shipping its own cross-platform games on real-time edge infrastructure. First title: More or Less.",
      founded: "2026",
      liveProduct: {
        name: "More or Less",
        url: "https://moreorless.snaptapp.us",
      },
    };
  }

  function products() {
    return {
      products: [
        {
          name: "More or Less",
          status: "live",
          url: "https://moreorless.snaptapp.us",
          page: "/products/",
          tagline: "One fake number. Is the real answer more or less?",
        },
      ],
    };
  }

  function contacts() {
    return {
      hello: "hello@snaptapp.us",
      support: "support@snaptapp.us",
      press: "press@snaptapp.us",
      privacy: "privacy@snaptapp.us",
      security: "security@snaptapp.us",
      page: "/contact/",
    };
  }

  function wrap(value) {
    return {
      content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
      structuredContent: value,
    };
  }

  var tools = [
    {
      name: "get_studio_overview",
      description:
        "Return a short overview of Snaptapp, the studio that operates snaptapp.us.",
      inputSchema: { type: "object", additionalProperties: false, properties: {} },
      execute: function () {
        return wrap(overview());
      },
    },
    {
      name: "list_products",
      description: "List Snaptapp products and where to play or read about them.",
      inputSchema: { type: "object", additionalProperties: false, properties: {} },
      execute: function () {
        return wrap(products());
      },
    },
    {
      name: "get_contact_channels",
      description: "Return Snaptapp email addresses and the contact page path.",
      inputSchema: { type: "object", additionalProperties: false, properties: {} },
      execute: function () {
        return wrap(contacts());
      },
    },
    {
      name: "navigate_site",
      description:
        "Navigate this browser tab to a Snaptapp site section (home, products, company, support, contact, privacy, terms, apiDocs).",
      inputSchema: {
        type: "object",
        additionalProperties: false,
        required: ["page"],
        properties: {
          page: {
            type: "string",
            enum: Object.keys(PAGES),
            description: "Named section of snaptapp.us",
          },
        },
      },
      execute: function (args) {
        var key = args && args.page;
        var path = PAGES[key];
        if (!path) {
          return wrap({ error: "unknown_page", page: key });
        }
        window.location.assign(path);
        return wrap({ navigated: path });
      },
    },
  ];

  function register(modelContext) {
    if (!modelContext || modelContext.__snaptappWebMcp) return;
    modelContext.__snaptappWebMcp = true;

    if (typeof modelContext.provideContext === "function") {
      modelContext.provideContext({ tools: tools });
      return;
    }

    if (typeof modelContext.registerTool === "function") {
      for (var i = 0; i < tools.length; i++) {
        modelContext.registerTool(tools[i]);
      }
    }
  }

  function tryRegister() {
    if (navigator.modelContext) {
      register(navigator.modelContext);
      return true;
    }
    return false;
  }

  if (tryRegister()) return;

  var attempts = 0;
  var timer = window.setInterval(function () {
    attempts += 1;
    if (tryRegister() || attempts > 40) {
      window.clearInterval(timer);
    }
  }, 100);
})();
