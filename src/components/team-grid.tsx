interface TeamMember {
    name: string;
    role: string;
    studentId: string;
}

const coreMembers: TeamMember[] = [
    { name: "Jash Shah", role: "Convenor", studentId: "202201016" },
    { name: "Sharvil Oza", role: "Dy. Convenor", studentId: "202201277" },
    { name: "Bhoomish Patel", role: "Core Member", studentId: "202201414" },
    { name: "Jainil Jagtap", role: "Core Member", studentId: "202301032" },
    { name: "Siddharth Rambhia", role: "Core Member", studentId: "202301072" },
    { name: "Parth Patel", role: "Core Member", studentId: "202411047" },
];

const teamMembers: TeamMember[] = [
    { name: "Param Andhariya", role: "Team Member", studentId: "202203041" },
    { name: "Devarsh Vasani", role: "Team Member", studentId: "202301251" },
    { name: "Parshv Joshi", role: "Team Member", studentId: "202301039" },
    { name: "Mitwa Ninama", role: "Team Member", studentId: "202301162" },
    { name: "Radhika Sanagadhiya", role: "Team Member", studentId: "202301184" },
    { name: "Yug Tejani", role: "Team Member", studentId: "202301487" },
    { name: "Dharmya Aagja", role: "Team Member", studentId: "202304010" },
    { name: "Dhairya Patel", role: "Team Member", studentId: "202411082" },
    { name: "Heet Shah", role: "Team Member", studentId: "202401067" },
    { name: "Manal Patel", role: "Team Member", studentId: "202401112" },
    { name: "Shlok Diwan", role: "Team Member", studentId: "202401051" },
    { name: "Meet Gandhi", role: "Team Member", studentId: "202412020" },
    { name: "Dhruvisha Pandya", role: "Team Member", studentId: "202412019" },
    { name: "Harsh Parakh", role: "Team Member", studentId: "202412058" },
    { name: "Marm Bhatt", role: "Team Member", studentId: "202401408" },
    { name: "Arya Mrug", role: "Team Member", studentId: "202403001" },
];

function MemberCard({ member }: { member: TeamMember }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-hidden">
            <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-500">ID: {member.studentId}</p>
        </div>
    );
}

export function TeamGrid() {
    return (
        <div className="space-y-12">
            <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Core Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreMembers.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Team Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}

