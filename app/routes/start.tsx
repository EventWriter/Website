import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Getting Started | Scribble Rocks" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Start() {

  return (
    <div>
      <section className="bg-amber-50 px-4 py-8 md:flex md:justify-center">
        <div>
          <h1 className="logo-type text-xl mb-4">scribble rocks</h1>
        </div>
      </section>

      <section>
        <div>
            <h1>What kind of event are you planning?</h1>
            <input type="radio" name="eventType" id="etype-wedding" /><label htmlFor="etype-wedding">Wedding</label>
            <input type="radio" name="eventType" id="etype-corpEvnt" /><label htmlFor="etype-corpEvnt">Corperate Event</label>
            <input type="radio" name="eventType" id="etype-other" /><label htmlFor="etype-other">Something Else</label>
            <button>Next</button>
        </div>

        <div>
            <h1>Can you please briefly describe the event you are planning?</h1>
            <textarea name="eventDesc" id="edesc" cols={30} rows={10}></textarea>
            <button>Next</button>
        </div>

        <div>
            <h1>What would you like us to write for you?</h1>
            <input type="checkbox" name="eventProd" id="eprod-invitation" /><label htmlFor="eprod-invitation">Personalized Event Invitations ($1.29/invitation)</label>
            <input type="checkbox" name="eventProd" id="eprod-thanks" /><label htmlFor="eprod-thanks">Personalized Thank You Notes ($1.29/note)</label>
            <input type="checkbox" name="eventProd" id="eprod-other" /><label htmlFor="eprod-other">Something Else (price by inquiry only)</label>
            <button>Next</button>
        </div>

        <div>
            <h1>Would you like us to professionally print and mail your notes to your guests?</h1>
            <input type="radio" name="mailOpt" id="mail-yes" /><label htmlFor="mail-yes">Yes (+additional cost)</label>
            <input type="radio" name="mailOpt" id="mail-no" /><label htmlFor="mail-no">No, I'd like to download, print, and mail the notes myself.</label>
            <button>Next</button>
        </div>
      </section>
      
    </div>
  );
}
