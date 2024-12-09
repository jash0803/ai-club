import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react'

interface Resource {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

interface ResourceCategory {
    name: string;
    resources: Resource[];
}

const resourceCategories: ResourceCategory[] = [
    {
        name: "AI Courses",
        resources: [
            {
                title: "EdX's Artificial Intelligence",
                description: "Comprehensive course on AI fundamentals",
                link: "https://www.edx.org/course/artificial-intelligence-ai",
                tags: ["AI", "Beginner"]
            },
            {
                title: "Udacity's Intro to Artificial Intelligence",
                description: "Learn the basics of AI",
                link: "https://www.udacity.com/course/intro-to-artificial-intelligence--cs271",
                tags: ["AI", "Beginner"]
            },
            {
                title: "Artificial Intelligence: Principles and Techniques By Stanford",
                description: "Stanford's course on AI principles and techniques",
                link: "http://web.stanford.edu/class/cs221/",
                tags: ["AI", "Advanced"]
            }
        ]
    },
    {
        name: "Machine Learning Courses",
        resources: [
            {
                title: "Machine Learning by Andrew NG",
                description: "Popular machine learning course on Coursera",
                link: "https://www.coursera.org/learn/machine-learning",
                tags: ["Machine Learning", "Intermediate"]
            },
            {
                title: "Intro to ML by Udacity",
                description: "Introduction to machine learning concepts",
                link: "https://www.udacity.com/course/intro-to-machine-learning--ud120",
                tags: ["Machine Learning", "Beginner"]
            },
            {
                title: "Machine Learning Crash Course by Google",
                description: "Google's fast-paced, practical introduction to machine learning",
                link: "https://developers.google.com/machine-learning/crash-course",
                tags: ["Machine Learning", "Intermediate"]
            }
        ]
    },
    {
        name: "Data Science Courses",
        resources: [
            {
                title: "IBM Data Science Professional Certificate",
                description: "Comprehensive data science program by IBM",
                link: "https://www.coursera.org/professional-certificates/ibm-data-science",
                tags: ["Data Science", "Professional"]
            },
            {
                title: "Udacity Intro to Data Science",
                description: "Learn the basics of data science",
                link: "https://www.udacity.com/course/intro-to-data-science--ud359",
                tags: ["Data Science", "Beginner"]
            },
            {
                title: "Data Science Course at Kaggle",
                description: "Hands-on data science course with real-world datasets",
                link: "https://www.kaggle.com/learn/data-science",
                tags: ["Data Science", "Intermediate"]
            }
        ]
    },
    {
        name: "Deep Learning Courses",
        resources: [
            {
                title: "Deep Learning Specialization",
                description: "Comprehensive deep learning course by Andrew NG",
                link: "https://www.coursera.org/specializations/deep-learning",
                tags: ["Deep Learning", "Advanced"]
            },
            {
                title: "Fast.ai Practical Deep Learning for Coders",
                description: "Practical approach to deep learning",
                link: "https://course.fast.ai/",
                tags: ["Deep Learning", "Intermediate"]
            },
            {
                title: "TensorFlow in Practice Specialization",
                description: "Applied deep learning with TensorFlow",
                link: "https://www.coursera.org/specializations/tensorflow-in-practice",
                tags: ["Deep Learning", "TensorFlow", "Intermediate"]
            }
        ]
    }
];

export function ResourceList() {
    return (
        <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">{category.name}</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {category.resources.map((resource, index) => (
                            <Card key={index} className="flex flex-col h-full">
                                <CardHeader>
                                    <CardTitle className="text-blue-900">{resource.title}</CardTitle>
                                    <CardDescription>{resource.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {resource.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">Learn More</a>
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

