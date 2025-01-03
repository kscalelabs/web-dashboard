import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/container";

const About = () => {
  return (
    <Container>
      <div className="text-center bg-background text-foreground rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">K-Scale Labs</h1>

        <div className="my-6">
          <PageHeader />
        </div>

        <div className="text-xl mb-8">
          Moving humanity up the Kardashev scale
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg">
            K-Scale Labs is building a platform for the next generation of
            embodied artificial intelligence. We are working towards a future
            where embodied intelligence is affordable, accessible, useful and
            safe for everyone.
          </p>
        </div>

        {/* Links section */}
        <div className="space-y-12">
          <div>
            <div className="gap-4">
              <a href="https://kscale.dev/research">Blog</a>
              <a href="https://docs.kscale.dev">Docs</a>
              <a href="https://discord.gg/kscale">Discord</a>
              <a href="https://forms.gle/sKytq8jsJXNEfaFy7">Feedback</a>
            </div>
          </div>

          {/* Backed by section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Backed by</h3>
            <div className="gap-4">
              <a href="https://www.fellowsfundvc.com/">Fellows Fund</a>
              <a href="https://www.gft.vc/">GFT Ventures</a>
              <a href="https://lombardstreet.vc/">Lombardstreet Ventures</a>
              <a href="https://www.ninjacapital.com/">Ninja Capital</a>
              <a href="https://www.ycombinator.com/companies/k-scale-labs">
                Y Combinator
              </a>
              <a href="https://aigrant.com/">AI Grant</a>
              <a href="https://www.pioneerfund.vc/">Pioneer Fund</a>
            </div>
          </div>

          {/* Team section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Team</h3>
            <div className="gap-4">
              <a href="https://aaronxie.com/">Aaron</a>
              <a href="https://www.alihkw.com/">Ali</a>
              <a href="https://ben.bolte.cc">Ben</a>
              <a href="https://www.linkedin.com/in/denys-bezmenov/">Denys</a>
              <a href="https://www.jingxiangmo.com/">Jingxiang</a>
              <a href="https://budzianowski.github.io/">Paweł</a>
              <a href="https://www.linkedin.com/in/ruixu/">Rui</a>
              <a href="https://www.linkedin.com/in/virajtipnis/">Viraj</a>
              <a href="https://wesleymaa.com/">Wesley</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
