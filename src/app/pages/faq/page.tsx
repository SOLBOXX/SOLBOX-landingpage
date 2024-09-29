'use client'

import { useState } from 'react';
interface FaqItemProps {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ id, title, content, isOpen, onToggle }) => {
  
  return (
    <div className='bg-white text-tertiary dark:bg-tertiary dark:text-white  rounded-2xl'>
    <button
      className="w-full text-left p-5 flex justify-between items-center focus:outline-none focus:text-primary"
      onClick={() => onToggle(id)}
    >
      <span className="text-base font-semibold">{title}</span>
      <span className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
    
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.91l3.71-3.7a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </span>
    </button>
    <div
      className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
    >
      <div className="px-4 py-2">
        <p>{content}</p>
      </div>
    </div>
  </div>
);
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: 'What is Solbox?',
      content: 'Solbox is a decentralized Web3 music streaming platform built on the Solana blockchain. It enables artists to mint their songs as NFTs and earn revenue through staking these NFTs, while listeners and sponsors can engage in meaningful ways, such as creating branded playlists and events, and earning rewards.',
    },
    {
      id: 2,
      title: 'How do I make my song available for streaming on Solbox?',
      content: 'To make your song available for streaming, you’ll need to mint it as an NFT and then stake it on the Solbox platform. Once staked, the song becomes available for streaming. If you no longer wish to have the song streamed, you can simply unstake it, and it will be removed from the platform.',
    },
    {
      id: 3,
      title: 'What rewards do artists receive on Solbox?',
      content: 'Artists earn revenue when their NFTs are staked for streaming. They receive 50% of the revenue generated through the platform, including rewards from leaderboard achievements, streaming time, and community engagement.'
    },
    {
      id: 4,
      title: ' What rewards do listeners get?',
      content: 'Listeners can earn rewards by streaming music, participating in playlists, and engaging with their favorite artists. Solbox allocates 20% of the revenue pool to listeners, rewarding them for their streaming activity and community involvement.',
    },
    {
      id: 5,
      title: 'Does Solbox support independent artists?',
      content: 'Yes! Solbox is designed to empower independent artists. By bypassing traditional record labels, artists have direct control over their music and earnings. Solbox also focuses on discovering new talent and providing exposure through leaderboards and community engagement.',
    },
    {
      id: 6,
      title: 'How are new talents discovered on Solbox?',
      content: 'Solbox integrates a discovery system for new and upcoming artists. Through genre-based and global leaderboards, artists can achieve milestones like gold, platinum, and diamond standards, depending on their song’s streaming success and community engagement.'
    },
    {
      id: 7,
      title: 'What tokens are used on Solbox for transactions?',
      content: 'Solbox supports the use of Solana (SOL) and USDC for all transactions. These tokens are used for staking NFTs, rewards, and other financial activities on the platform.'
    },
    {
      id: 8,
      title: 'How do sponsors and partners benefit from Solbox?',
      content: 'Sponsors and partners can collaborate with artists and listeners to create branded playlists and sponsor events. This provides new revenue streams and enhanced audience engagement, with strategic opportunities to connect with the music community.'
    },
    {
      id: 9,
      title: "Can artists take down their music from Solbox?",
      content: 'Yes, artists can unstake their songs at any time if they no longer want them available for streaming on the platform. Once the NFT is unstaked, the song will be removed from the streaming library.'
    },
    {
      id: 10,
      title: 'How does Solbox differ from other music platforms?',
      content: 'Solbox is decentralized, empowering both artists and listeners with rewards. It bypasses traditional record labels, offering artists more control and revenue. Solbox also emphasizes talent discovery, ensuring emerging artists have a platform to shine, and listeners are rewarded for their active participation.'
    }
  ];

  const handleToggle = (id: number) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id)); 
  };

  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-16">
          <h2
            className="text-4xl text-primary dark:text-white font-manrope text-center font-bold leading-[3.25rem]"
          >
            Frequently asked questions
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
          {items.map((item) => (
          <FaqItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isOpen={openIndex === item.id}
            onToggle={handleToggle}
          />
          ))}
        </div>
        
    </div>
  );
};

export default Faq;


