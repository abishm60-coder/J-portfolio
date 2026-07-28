import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './WorkProject2.css';
import project2Hero from '../assets/project2_hero.png';
import project2ChooseExpert from '../assets/project2_choose_expert.png';
import project2AdviceToAction from '../assets/project2_advice_to_action.png';
import project2TrustCollaboration from '../assets/project2_trust_collaboration.png';
import project2Research from '../assets/project2_research.png';
import project2DesignProcess from '../assets/project2_design_process.png';
import project2ChallengeSubmission from '../assets/project2_challenge_submission.png';
import project2ExpertTeasers from '../assets/project2_expert_teasers.png';
import project2SolutionUnlocking from '../assets/project2_solution_unlocking.png';
import project2TaskExecution from '../assets/project2_task_execution.png';
import project2TrustLoop from '../assets/project2_trust_loop.png';
import project2DesignSystem from '../assets/project2_design_system.png';
import project2Outcome from '../assets/project2_outcome.png';
import project2MoreProjects from '../assets/project2_more_projects.png';
import sec1 from '../assets/project2_sec1.png';
import sec2 from '../assets/project2_sec2.png';
import sec3 from '../assets/project2_sec3.png';
import sec4 from '../assets/project2_sec4.png';

interface WorkProject2Props {
  onBack?: () => void;
}

export const WorkProject2: React.FC<WorkProject2Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#/work';
    }
  };

  return (
    <div className="work-project2-container">
      {/* Edge-to-edge Hero Banner */}
      <div className="project2-hero-fullwidth">
        <img src={project2Hero} alt="Expert Marketplace - Hero" className="project2-hero-image" />
      </div>

      <div className="work-project2-content">
        <div className="project2-nav-bar">
          <button onClick={handleBack} className="project2-back-btn">
            <ArrowLeft size={16} />
            <span>BACK TO CREATIONS</span>
          </button>
        </div>

        {/* Native Vector HTML Overview Card */}
        <div className="project2-overview-html-card">
          <div className="project2-card-header-row">
            <div className="project2-card-title-group">
              <h1 className="project2-main-title">EXPERT MARKETPLACE</h1>
              <p className="project2-tagline">
                turning business challenges into expert-led solutions through a structured collaboration marketplace.
              </p>
            </div>
            <div className="project2-meta-group">
              <div className="project2-meta-item">
                <span className="project2-meta-label">Industry</span>
                <span className="project2-meta-value">b2b saas</span>
              </div>
              <div className="project2-meta-item">
                <span className="project2-meta-label">Year</span>
                <span className="project2-meta-value">2025</span>
              </div>
              <div className="project2-meta-item">
                <span className="project2-meta-label">Duration</span>
                <span className="project2-meta-value">6 month</span>
              </div>
            </div>
          </div>

          <div className="project2-card-divider" />

          {/* Overview */}
          <div className="project2-card-section-row">
            <div className="project2-section-left">
              <h3 className="project2-section-title">Overview</h3>
            </div>
            <div className="project2-section-right">
              <p className="project2-body-text">
                i designed a b2b expert marketplace that helps businesses connect with industry professionals to solve real operational challenges.
              </p>
              <p className="project2-body-text">
                instead of immediately purchasing a complete consulting solution, businesses can post a challenge, receive short solution previews from multiple experts, evaluate their credibility, unlock the most relevant solution, and collaborate through structured tasks until the challenge is resolved.
              </p>
              <p className="project2-body-text">
                the product needed to balance three things: finding the right expertise, building enough trust to pay for a solution, and keeping the entire collaboration inside the platform.
              </p>
            </div>
          </div>

          {/* My Role */}
          <div className="project2-card-section-row">
            <div className="project2-section-left">
              <h3 className="project2-section-title">My Role</h3>
            </div>
            <div className="project2-section-right">
              <p className="project2-body-text">
                ux research • product design • user flows • wireframing • ui design • prototyping • responsive design
              </p>
            </div>
          </div>

          {/* Executed */}
          <div className="project2-card-section-row">
            <div className="project2-section-left">
              <h3 className="project2-section-title">Executed</h3>
            </div>
            <div className="project2-section-right">
              <ul className="project2-executed-list">
                <li>ux research</li>
                <li>competitor analysis</li>
                <li>problem framing</li>
                <li>user flow</li>
                <li>mid-fidelity wireframes</li>
                <li>ui design</li>
                <li>interactive prototype</li>
                <li>responsive design</li>
                <li>developer handoff</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 3: Problem Statement & Choosing the Right Expert */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Problem Statement</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">what needed to change</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  businesses often need specialized expertise to solve challenges outside their internal capabilities. but finding the right expert, evaluating their approach before committing, and managing the actual solution process can be fragmented and uncertain.
                </p>
                <p style={{ margin: 0 }}>
                  the challenge was to create a trusted marketplace where businesses could evaluate expertise before paying for deeper collaboration and then manage the entire solution journey in one place.
                </p>
              </div>
            </div>
          </div>
          
          <div className="project2-section-header" style={{ marginTop: '24px' }}>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">01 choosing the right expert</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  a profile alone isn't enough to know whether an expert understands a specific business problem.
                </p>
                <p style={{ margin: 0 }}>
                  businesses needed a way to evaluate multiple expert approaches before making a commitment.
                </p>
              </div>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2ChooseExpert} alt="Choosing the Right Expert Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 4: How I Solved It - 02 Moving from Advice to Action */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">02 moving from advice to action</h4>
              <p className="project2-sub-desc">
                receiving expert advice wasn't enough. businesses needed a clear path for turning a selected solution into actionable tasks and measurable progress.
              </p>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2AdviceToAction} alt="Moving from Advice to Action Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 6: How I Solved It - 03 Building Trust & Collaboration */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">03 building trust & collaboration</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  businesses needed confidence in the experts they selected, while the platform needed to keep collaboration secure and within its ecosystem.
                </p>
                <p style={{ margin: 0 }}>
                  ratings, reviews, structured communication, and admin-moderated messaging became important trust mechanisms.
                </p>
              </div>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2TrustCollaboration} alt="Building Trust & Collaboration Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 7: Research */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Research</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">what i discovered</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  i studied how expert marketplaces and consulting platforms handle expert discovery, credibility, solution evaluation, payments, and collaboration.
                </p>
                <p style={{ margin: 0 }}>
                  the research helped identify a key gap: finding an expert wasn't the biggest problem—knowing whether their approach was worth committing to was.
                </p>
              </div>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2Research} alt="Research & Insights" className="project2-case-image" />
          </div>

          <div className="project2-section-header" style={{ marginTop: '36px' }}>
            <h3 className="project2-section-heading" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>key insights</h3>
            
            <div className="project2-sub-header" style={{ marginBottom: '20px' }}>
              <h4 className="project2-sub-title">preview before commitment</h4>
              <p className="project2-sub-desc">
                businesses need enough information to judge an expert's thinking before unlocking their complete solution.
              </p>
            </div>

            <div className="project2-sub-header" style={{ marginBottom: '20px' }}>
              <h4 className="project2-sub-title">trust influences selection</h4>
              <p className="project2-sub-desc">
                ratings, reviews, experience, and expertise become critical when multiple experts respond to the same challenge.
              </p>
            </div>

            <div className="project2-sub-header">
              <h4 className="project2-sub-title">solutions need execution</h4>
              <p className="project2-sub-desc">
                the experience shouldn't stop after delivering advice. users need actionable tasks, feedback, and progress visibility to actually solve the challenge.
              </p>
            </div>
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 8: Design Process */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Design Process</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">from challenge to resolution</h4>
              <p className="project2-sub-desc">
                instead of showing a generic design-process timeline, i'd use the actual product mental model here.
              </p>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2DesignProcess} alt="Design Process (Client & Expert Journeys)" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 9: How I Solved It - Challenge Submission */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">How I Solved It</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">challenge submission</h4>
              <p className="project2-sub-desc">
                businesses can structure their challenge around the problem, objectives, scope, constraints, budget, and supporting documents—giving experts enough context to understand the problem before responding.
              </p>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2ChallengeSubmission} alt="Challenge Details & Submission Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 10: The Core Feature - Expert Teasers */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">The Core Feature</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">expert teasers</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  instead of immediately purchasing a complete solution, businesses receive short teasers from multiple experts explaining how they would approach the challenge.
                </p>
                <p style={{ margin: 0 }}>
                  this creates a low-risk evaluation stage where users can compare approaches, ratings, and expertise before choosing whom to work with.
                </p>
              </div>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2ExpertTeasers} alt="Expert Teasers Comparison Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 11: Solution Unlocking */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Solution Unlocking</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">unlock & collaborate</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  once a business identifies the strongest approach, it can unlock the expert's full solution based on its plan.
                </p>
                <p style={{ margin: 0 }}>
                  the unlocked experience provides access to supporting documents, structured tasks, expert guidance, and continued collaboration.
                </p>
              </div>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2SolutionUnlocking} alt="Before/After Solution Unlocking Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 12: Task Execution */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Task Execution</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">from solution to action</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  experts can break the solution into actionable tasks with priorities, deadlines, supporting files, and progress states.
                </p>
                <p style={{ margin: 0 }}>
                  both sides can discuss individual tasks, share updates, and track completion—turning expert knowledge into a guided execution process rather than a static recommendation.
                </p>
              </div>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2TaskExecution} alt="Task Execution Board & Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 13: Trust Loop */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Trust Loop</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">trust grows with every solution</h4>
              <p className="project2-sub-desc">
                after completing a collaboration, businesses can rate and review the expert. these ratings appear alongside future teaser submissions, helping other businesses evaluate experts with greater confidence.
              </p>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2TrustLoop} alt="Trust Loop Ratings & Feedback Interface" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 14: Design System */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Design System</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">built for clarity at scale</h4>
              <p className="project2-sub-desc">
                because the product contains challenges, expert responses, subscriptions, payments, tasks, reviews, and multiple progress states, i built reusable patterns to keep complex workflows consistent and easy to scan.
              </p>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2DesignSystem} alt="Design System & UI Components Style Guide" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 15: Outcome */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Outcome</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">discovery to structured execution.</h4>
              <div className="project2-sub-desc">
                <p style={{ margin: '0 0 16px 0' }}>
                  the final experience transformed a complex consulting workflow into a structured marketplace journey where businesses can <strong>post challenges, evaluate expert thinking, unlock solutions, collaborate through tasks, and track progress within one ecosystem.</strong>
                </p>
                <p style={{ margin: 0 }}>
                  for experts, the platform creates a clear path to discover relevant challenges, demonstrate expertise, build reputation, collaborate with clients, and earn rewards.
                </p>
              </div>
            </div>
          </div>
          <div className="project2-image-container">
            <img src={project2Outcome} alt="Final Polished Product Montage Collage" className="project2-case-image" />
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 16: Reflection */}
        <div className="project2-html-section">
          <div className="project2-section-header">
            <h2 className="project2-section-heading">Reflection</h2>
            <div className="project2-sub-header">
              <h4 className="project2-sub-title">what did i learn?</h4>
              <div className="project2-sub-desc">
                <div style={{ marginBottom: '24px' }}>
                  <h5 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>designing two sides as one system</h5>
                  <p style={{ margin: 0 }}>
                    designing for businesses and experts taught me that marketplace ux isn't two separate experiences. every action on one side creates a state, expectation, or response on the other. mapping those dependencies early helped simplify the overall workflow.
                  </p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>trust needs to appear at the decision point</h5>
                  <p style={{ margin: 0 }}>
                    expert ratings, reviews, teasers, and experience matter most when users are deciding whether to commit. designing these signals directly into the selection journey made trust part of the experience rather than just profile information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project2-section-divider" />

        {/* SECTION 17: More Projects */}
        <div className="project2-html-section" style={{ paddingBottom: '60px' }}>
          <div className="project2-section-header">
            <h2 className="project2-section-heading">More Projects</h2>
          </div>
          <div className="project2-image-container">
            <img src={project2MoreProjects} alt="Explore More Projects" className="project2-case-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
