interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
}

const courseData: Course[] = [
  {
    id: "course-1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    image: "/images/web-dev.jpg"
  },
  {
    id: "course-2",
    title: "Advanced React Programming",
    description: "Master React.js with advanced concepts and real-world projects.",
    image: "/images/react.jpg"
  },
  {
    id: "course-3",
    title: "Full Stack Development",
    description: "Build complete applications with frontend and backend technologies.",
    image: "/images/fullstack.jpg"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="object-cover w-full h-48"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
