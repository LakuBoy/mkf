import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">About Our Foundation</h1>
        <p className="text-emerald-600 font-medium italic">"Service in the Heart of Africa"</p>
      </div>

      <section className="prose prose-slate max-w-none space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Our History</h2>
        <p className="leading-relaxed text-slate-600">
          Two Sisters of St. Francis congregation in the Eastern region – Sr. Clare Mary Busingye and Sr. Ikalet Bernadette in their duty of service as Secondary School head Teachers have dedicated their lives to serving the poor and the marginalized communities. Through their involvement in social entrepreneurship, they have supported their children from poor communities by providing education scholarships for children.
        </p>
        <p className="leading-relaxed text-slate-600">
          Confronted by overwhelming separation of children from their families resulting from many causes, including the death of one or both parents, abandonment, displacement due to armed conflict, inability or unwillingness of the family to provide care, behaviour problems, relationship difficulties, abuse, neglect and larger systemic issues such as poverty, conflict, natural disaster, or HIV/AIDS. The two sisters decided to establish a foundation as a &ldquo;Family Strengthening Care Model&rdquo; That is aimed at addressing such causes and the need for subsequent alternative care arrangements by providing interventions that promote the safety and well being of the child and family.
        </p>
      </section>

      <Separator />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-blue-50/50 border-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-800">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 font-medium">
            &ldquo;To empower society to break the cycle of poverty so children and families can step into the future with well-founded hope.&rdquo;
          </CardContent>
        </Card>

        <Card className="bg-emerald-50/50 border-emerald-100">
          <CardHeader>
            <CardTitle className="text-emerald-800">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 font-medium">
            &ldquo;To engage a multi-sectoral and professional approach with strong community participation and ownership for the enhancement of education and development&rdquo;
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-base">Integrity</CardTitle></CardHeader>
            <CardContent className="text-xs text-slate-600">MKF’s desire is to be driven by a high level of integrity and ethical behavior in all activities through honesty, accountability, transparency and consistence.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Quality</CardTitle></CardHeader>
            <CardContent className="text-xs text-slate-600">We aspire to pursue excellence and quality through employing a highly professional and competent work force with responsibility for efficiency.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Efficiency</CardTitle></CardHeader>
            <CardContent className="text-xs text-slate-600">Stresses the importance of teamwork, networking, co-operation, competence, innovation, and resource awareness.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Gender Responsiveness</CardTitle></CardHeader>
            <CardContent className="text-xs text-slate-600">MKF is committed to address gender inequalities in all its operations and seeks to bring about remedial measures.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Transparency</CardTitle></CardHeader>
            <CardContent className="text-xs text-slate-600">A bias for action, closeness to stakeholders, cost-efficiency, and systemic use of evidence-based interventions.</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Professionalism</CardTitle></CardHeader>
            <CardContent className="text-xs text-slate-600">Driven by professional approaches to improvement of Education of the most vulnerable members of society through strong community participation.</CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}