import CourseCard from "../../components/CourseCard"

const dummyKurs = [
  { id: "1", title: "Grunnkurs i kommunikasjon" },
  { id: "2", title: "Mentalt fokus og selvledelse" },
]

export default function KursOversikt() {
  return (
    <div className="content-box">
      <h2>Mine kurs</h2>
      {dummyKurs.map(kurs => (
        <CourseCard key={kurs.id} id={kurs.id} title={kurs.title} />
      ))}
    </div>
  )
}
