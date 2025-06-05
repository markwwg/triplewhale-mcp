import fetch from "node-fetch";

export const tools = [
  {
    name: "summary_page_metrics",
    description: "Triple Whale dashboard KPIs for a date range (YYYY-MM-DD)",
    parameters: {
      type: "object",
      properties: {
        start_date: { type: "string", format: "date" },
        end_date:   { type: "string", format: "date" }
      },
      required: ["start_date", "end_date"]
    },
    run: async ({ start_date, end_date }) => {
      const r = await fetch(
        "https://api.triplewhale.com/api/v2/summary-page/get-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.TRIPLEWHALE_API_KEY
          },
          body: JSON.stringify({ startDate: start_date, endDate: end_date })
        }
      );
      if (!r.ok) throw new Error(await r.text());
      return await r.json();
    }
  },
  {
    name: "ad_spend_by_platform",
    description: "Ad spend split by platform for a date range",
    parameters: {
      type: "object",
      properties: {
        start_date: { type: "string", format: "date" },
        end_date:   { type: "string", format: "date" }
      },
      required: ["start_date", "end_date"]
    },
    run: async ({ start_date, end_date }) => {
      const r = await fetch(
        "https://api.triplewhale.com/api/v2/summary-page/ad-platform-spend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.TRIPLEWHALE_API_KEY
          },
          body: JSON.stringify({ startDate: start_date, endDate: end_date })
        }
      );
      if (!r.ok) throw new Error(await r.text());
      return await r.json();
    }
  }
];
