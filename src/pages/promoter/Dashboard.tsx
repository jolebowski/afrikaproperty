import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { LeadsWidget } from "../../components/dashboard/LeadsWidget";
import { ListingsTable } from "../../components/dashboard/ListingsTable";
import { QuickActions } from "../../components/dashboard/QuickActions";
import { StatsOverview } from "../../components/dashboard/StatsOverview";
import { Reveal } from "../../components/ui/Reveal";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <DashboardHeader promoterName="Horizon Immobilier" />

      <main className="container-custom py-8 space-y-8">
        {/* Stats Section */}
        <section>
          <Reveal>
            <StatsOverview />
          </Reveal>
        </section>

        {/* Main Grid: Listings (2/3) + Sidebar (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Listings */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal delay={0.1}>
              <ListingsTable />
            </Reveal>
          </div>

          {/* Right Column: Leads & Actions */}
          <div className="space-y-8">
            <Reveal delay={0.2}>
              <QuickActions />
            </Reveal>
            <Reveal delay={0.3}>
              <LeadsWidget />
            </Reveal>
          </div>
          
        </div>
      </main>
    </div>
  );
}
