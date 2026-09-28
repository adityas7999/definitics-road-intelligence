export type Condition = 'Good' | 'Fair' | 'Poor' | 'Critical'
export type RoadSegment = { id: string; name: string; region: string; lengthKm: number; iri: number; condition: Condition; defects: number; surveyed: string; trend: number }
export type Defect = { id: string; type: string; road: string; chainage: string; severity: 'High' | 'Medium' | 'Low'; status: 'Open' | 'In progress' | 'Resolved'; reported: string }
export type DashboardData = { segments: RoadSegment[]; defects: Defect[]; monthly: number[]; updatedAt: string }
// Illustrative data only. Never present these figures as an actual Definitics survey.
export const sampleData: DashboardData = {
  updatedAt: 'Sample workspace', monthly: [58, 62, 60, 66, 65, 70, 73, 72, 77, 79, 82, 84],
  segments: [
    { id: 'MH-01', name: 'Mumbai–Pune Expressway', region: 'West Zone', lengthKm: 94.5, iri: 2.4, condition: 'Good', defects: 8, surveyed: '12 Sep 2026', trend: 3.2 },
    { id: 'MH-02', name: 'Pune–Nashik Highway', region: 'North Zone', lengthKm: 208.6, iri: 3.8, condition: 'Fair', defects: 24, surveyed: '10 Sep 2026', trend: -1.4 },
    { id: 'MH-03', name: 'Solapur Road Corridor', region: 'East Zone', lengthKm: 112.8, iri: 5.6, condition: 'Poor', defects: 36, surveyed: '08 Sep 2026', trend: -4.1 },
    { id: 'MH-04', name: 'Satara Bypass', region: 'South Zone', lengthKm: 42.3, iri: 1.9, condition: 'Good', defects: 3, surveyed: '06 Sep 2026', trend: 2.8 },
    { id: 'MH-05', name: 'Ahmednagar Link Road', region: 'East Zone', lengthKm: 76.4, iri: 6.7, condition: 'Critical', defects: 51, surveyed: '04 Sep 2026', trend: -6.7 },
    { id: 'MH-06', name: 'Lonavala Ghat Section', region: 'West Zone', lengthKm: 31.2, iri: 4.2, condition: 'Fair', defects: 17, surveyed: '02 Sep 2026', trend: 0.8 },
  ],
  defects: [
    { id: 'DF-2841', type: 'Pothole cluster', road: 'Ahmednagar Link Road', chainage: 'KM 42.8–43.2', severity: 'High', status: 'Open', reported: '14 Sep 2026' },
    { id: 'DF-2840', type: 'Surface cracking', road: 'Solapur Road Corridor', chainage: 'KM 78.4', severity: 'High', status: 'In progress', reported: '13 Sep 2026' },
    { id: 'DF-2839', type: 'Shoulder damage', road: 'Pune–Nashik Highway', chainage: 'KM 106.1', severity: 'Medium', status: 'Open', reported: '12 Sep 2026' },
    { id: 'DF-2838', type: 'Rutting', road: 'Lonavala Ghat Section', chainage: 'KM 18.6', severity: 'Medium', status: 'Resolved', reported: '11 Sep 2026' },
  ],
}
