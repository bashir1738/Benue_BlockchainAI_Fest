import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Reveal from './Reveal';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, index }: FAQItemProps) => {
    return (
        <Reveal delay={index * 100}>
            <div
                className={`group mb-5 overflow-hidden rounded-2xl border transition-all duration-500 ${isOpen
                    ? 'border-gray-700 bg-primary/5'
                    : 'border-white/5 bg-white/3 hover:border-white/20 hover:bg-white/5'
                    }`}
            >
                <button
                    onClick={onClick}
                    className="flex w-full items-center justify-between p-6 text-left transition-all focus:outline-none"
                >
                    <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                        {question}
                    </span>
                    <div
                        className={`ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen
                            ? 'border-white/10 bg-white/5 text-white/50 group-hover:border-white/30 group-hover:text-white'
                            : 'border-white/10 bg-white/5 text-white/50 group-hover:border-white/30 group-hover:text-white'
                            }`}
                    >
                        <HiChevronDown className={`h-6 w-6 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </button>
                <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="p-6 pt-0 text-white/60 leading-relaxed text-base md:text-lg border-t border-white/5 mt-2">
                            {answer}
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is Benue Blockchain & AI Fest?",
            answer: "Benue Blockchain & AI Fest is a flagship technology conference designed to catalyze digital innovation in North-Central Nigeria. We bridge the gap between global tech trends and local talent, providing a platform for deep-diving into Blockchain scalability, AI ethics, and African digital sovereignty."
        },
        {
            question: "When and where is the event taking place?",
            answer: "The fest is hosted in the heart of Makurdi, Benue State. While final dates are announced via our official platforms, the event typically spans three days of intensive workshops, keynote sessions, and hackathons focused on real-world problem-solving."
        },
        {
            question: "Is registration free?",
            answer: "We believe in democratic access to technology. General admission and workshops are free for all pre-registered attendees. Some exclusive VIP networking sessions or certain developer certifications may have associated costs, which will be clearly indicated during registration."
        },
        {
            question: "How can I participate as a speaker or partner?",
            answer: "We welcome thought leaders and organizations who share our vision. You can apply through our 'Partner With Us' portal or directly contact our executive team. We offer tiered partnership opportunities ranging from exhibition booths to headline sponsorship."
        },
        {
            question: "Who should attend this fest?",
            answer: "The fest is built for a diverse ecosystem. This includes software engineers, policy makers, undergraduate students, agricultural tech entrepreneurs, and financial analysts. If you are interested in how decentralized tech and machine learning will redefine the 21st century, this is your community."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-24 overflow-hidden bg-secondary">

            <div className="container relative mx-auto px-4 max-w-6xl">
                <Reveal>
                    <div className="mb-20 text-center">
                        <div className="mb-4 inline-block rounded-full  px-4 py-1.5 text-sm font-semibold tracking-wider text-primary uppercase">
                            Common Enquiries
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                            Frequent <span className="">Questions</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-white/50 leading-relaxed font-light">
                            Everything you need to know about the Benue Blockchain & AI Fest. Can't find what you're looking for? Our support team is just a message away.
                        </p>
                    </div>
                </Reveal>

                <div className="relative z-10">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
};

export default FAQ;

