import { Section } from '@/components/Section';
import { TabList } from '@/components/TabList';
import { TabListNew } from '@/components/TabList/TabListNew';
import questions from '@/data/questions';

export const Questions = () => {
  return (
    <Section id="questions" title="Питання-відповіді" className="mx-auto">
      {/* <TabList data={questions} className="mx-auto mt-5 md:mt-6" /> */}
      <TabListNew data={questions} className="mx-auto mt-5 md:mt-6" />
    </Section>
  );
};
