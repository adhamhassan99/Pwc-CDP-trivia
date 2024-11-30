import TowerPill from "./components/TowerPill"

const towersData = [
  {
    towerName: "Applied AI",
    href: "/applied-ai"
  },
  {
    towerName: "Cloud",
    href: "/cloud"
  },
  {
    towerName: "Cybersecurity",
    href: "/cybersecurity"
  },
  {
    towerName: "Salesforce",
    href: "/salesforce"
  },

  {
    towerName: "Data Analytics",
    href: "/data-analytics"
  },
  {
    towerName: "MS Dynamics",
    href: "/ms-dynamics"
  },
  {
    towerName: "Oracle & EPM",
    href: "/oracle-epm"
  },
  {
    towerName: "PMO & Agile Practice",
    href: "/pmo"
  },
  {
    towerName: "Custom Development",
    href: "/custom-dev"
  },
  {
    towerName: "Software Testing",
    href: "/testing"
  },
  {
    towerName: "SAP",
    href: "/sap"
  },
  {
    towerName: "Solution Architecture",
    href: "/sol-architecture"
  },
]

function App() {

  return (
    <div className="bg-orange-500 h-full flex flex-col items-center  justify-center">
      <div className="flex flex-col w-full gap-7 overflow-auto py-10 px-20">
        {towersData.map(tower => (
          <TowerPill{...tower} />
        ))}
      </div>
    </div>
  )
}

export default App
