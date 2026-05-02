import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {type DropdownOption } from "./Dropdown.types";

// ── Sample datasets ───────────────────────────────────────────────────────────
const FRAMEWORKS: DropdownOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "SolidJS", value: "solid" },
  { label: "Qwik", value: "qwik" },
];

const ROLES: DropdownOption[] = [
  { label: "Frontend Engineer", value: "frontend" },
  { label: "Backend Engineer", value: "backend" },
  { label: "Full Stack Engineer", value: "fullstack" },
  { label: "DevOps Engineer", value: "devops" },
  { label: "Data Scientist", value: "data" },
  { label: "Product Designer", value: "designer" },
];

const COUNTRIES: DropdownOption[] = [
  { label: "India", value: "in" },
  { label: "United States", value: "us" },
  { label: "Germany", value: "de" },
  { label: "Japan", value: "jp" },
  { label: "Brazil", value: "br" },
  { label: "Canada", value: "ca" },
];

// ── Demo page ─────────────────────────────────────────────────────────────────
export default function DropdownDemo() {
  // Controlled single
  const [framework, setFramework] = useState<string>("");

  // Controlled multi
  const [roles, setRoles] = useState<string[]>([]);

  // Uncontrolled (auto-select first)
  // value/onChange not passed — component manages its own state

  return (
    <div className="min-h-screen bg-[#F7F8FC] font-['DM_Sans',_sans-serif] px-6 py-14">
      <div className="max-w-2xl mx-auto space-y-12">

        {/* ── Header ── */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#5A67F2] mb-2">
            Component Library
          </p>
          <h1 className="text-3xl font-extrabold text-[#0F1624] tracking-tight">
            Dropdown
          </h1>
          <p className="mt-2 text-[#6B7589] text-sm leading-relaxed">
            Reusable, accessible select component with search, multi-select,
            loading & error states. Built with React + Tailwind CSS.
          </p>
        </div>

        {/* ── Example 1: Single Select (Controlled) ── */}
        <section>
          <Label
            title="Single Select — Controlled"
            description="User picks one framework. Selection feeds back into parent state."
          />
          <Dropdown
            options={FRAMEWORKS}
            value={framework}
            onChange={(v) => setFramework(v as string)}
            placeholder="Pick a framework"
            width={200}
            panelMaxHeight={180}
            
          />
          {framework && (
            <Output>Selected: <strong>{framework}</strong></Output>
          )}
        </section>

        {/* ── Example 2: Multi Select (Controlled) ── */}
        <section>
          <Label
            title="Multi Select — Controlled"
            description="Pick multiple roles. Includes Select All and inline clear per tag."
          />
          <Dropdown
            options={ROLES}
            value={roles}
            onChange={(v) => setRoles(v as string[])}
            multiSelect
            placeholder="Choose roles"
          />
          {roles.length > 0 && (
            <Output>Selected: <strong>{roles.join(", ")}</strong></Output>
          )}
        </section>

        {/* ── Example 3: Auto-select first ── */}
        <section>
          <Label
            title="Auto-Select First Option"
            description="The first option is pre-selected on mount. Uncontrolled mode."
          />
          <Dropdown
            options={COUNTRIES}
            autoSelect
            placeholder="Country"
          />
        </section>

        {/* ── Example 4: Disabled ── */}
        <section>
          <Label
            title="Disabled State"
            description="Interaction is fully prevented."
          />
          <Dropdown
            options={FRAMEWORKS}
            value="react"
            placeholder="Disabled dropdown"
            disabled
          />
        </section>

        {/* ── Example 5: Loading state ── */}
        <section>
          <Label
            title="Loading State"
            description="Shown while options are being fetched asynchronously."
          />
          <Dropdown
            options={[]}
            placeholder="Fetching options…"
            loading
          />
        </section>

        {/* ── Example 6: Error state ── */}
        <section>
          <Label
            title="Error State"
            description="Highlighted border + inline error message."
          />
          <Dropdown
            options={FRAMEWORKS}
            placeholder="Pick a framework"
            error="This field is required"
          />
        </section>

      </div>
    </div>
  );
}

// ── Small helper components ───────────────────────────────────────────────────
function Label({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-3">
      <h2 className="text-sm font-bold text-[#0F1624] tracking-wide">{title}</h2>
      <p className="text-xs text-[#9AA0B0] mt-0.5">{description}</p>
    </div>
  );
}

function Output({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2.5 text-xs bg-white border border-[#DDE1EC] rounded-lg px-3 py-2 text-[#6B7589]">
      {children}
    </p>
  );
}