import { useState } from 'react';

export default function ProjectCard({ project }) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    return (
        <div className='bg-gray-800 rounded-lg p-4 max-w-md font-poppins'>
            <img
                src={project.image}
                alt={project.title}
                className='w-full rounded-md text-orange-400'
            />

            <h3 className='text-orange-400 font-extrabold text-center my-4 text-2xl'>{project.title}</h3>
            <p className='text-xl'>{project.description}</p>

            <div className='flex gap-4 mt-4 justify-center'>
               <button className='bg-gray-400 rounded-lg px-4 py-2'><a href={project.github} target="_blank" rel="noopener noreferrer">
                    Github
                </a></button> 
                <button className='bg-gray-400 rounded-lg px-4 py-2' onClick={() => setIsPreviewOpen(true)}>
                    Preview
                </button>
            </div>

            {isPreviewOpen && (
                <div className='mt-4'>
                    <div className='flex justify-between items-center mb-2'>
                        <span className='text-sm text-orange-200'>Preview</span>
                        <button
                            onClick={() => setIsPreviewOpen(false)}
                            className='text-sm text-white hover:text-orange-300'
                        >
                            Close
                        </button>
                    </div>
                    <iframe
                        src={project.demoUrl}
                        title={project.title}
                        className='w-full h-60 rounded-md border border-gray-700'
                    />
                </div>
            )}
        </div>
    );
}
