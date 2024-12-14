'use client'
import Image from 'next/image';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

const courseData: Course[] = [
  {
    id: "course-1",
    title: "《小白的AI编程提效课》",
    description: "专为编程新手打造的AI辅助开发课程，让您快速掌握AI提升编程效率的技巧。",
    image: "/images/courses/ai-programming.png",
    url: "https://www.xiaobot.net/p/chatai666?refer=e5248818-dc47-4062-86a7-73cc0336dd63"
  },
  {
    id: "course-2",
    title: "《AI自动化爆款训练营》",
    description: "深入学习AI自动化技术，掌握创建高效自动化工作流的核心技能。",
    image: "/images/courses/ai-automation.png",
    url: "https://l0lupq5bcjq.feishu.cn/docx/Nue8dP3eVoVvAYxWdWvcNijnnNf"
  },
  {
    id: "course-3",
    title: "《斑码合伙人》",
    description: "探索技术创业与合作机遇，打造成功的商业合作伙伴关系。",
    image: "/images/courses/business-partner.png",
    url: "https://l0lupq5bcjq.feishu.cn/docx/KYBPd25Mko5eVQxjPo6cYnBMnEc"
  }
];

export default function Courses() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = url;
  };

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">斑码AI课程体系</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image 
                  src={course.image} 
                  alt={course.title}
                  width={16}
                  height={9}
                  className="object-cover w-full h-48"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <a 
                  href={course.url}
                  onClick={(e) => handleClick(e, course.url)}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  了解更多
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
