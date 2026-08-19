/**
 * Deterministically evaluates a student's eligibility for a job.
 * @param {Object} student - The User object (student).
 * @param {Object} job - The Job object.
 * @returns {Object} Eligibility matrix and final status.
 */
const checkEligibility = (student, job) => {
    const criteria = job.criteria;
    const matrix = {
        cgpa: {
            required: criteria.minCgpa,
            actual: student.cgpa,
            pass: student.cgpa >= criteria.minCgpa,
            label: `Min CGPA: ${criteria.minCgpa} | Your CGPA: ${student.cgpa}`
        },
        tenth: {
            required: criteria.minTenth,
            actual: student.tenthPercentage,
            pass: student.tenthPercentage >= criteria.minTenth,
            label: `Min 10th%: ${criteria.minTenth} | Your 10th%: ${student.tenthPercentage}`
        },
        twelfthOrDiploma: {
            required: Math.max(criteria.minTwelfth, criteria.minDiploma), // Simplified check
            actual: Math.max(student.twelfthPercentage, student.diplomaPercentage),
            pass: student.twelfthPercentage >= criteria.minTwelfth || student.diplomaPercentage >= criteria.minDiploma,
            label: `Min 12th/Diploma%: ${Math.max(criteria.minTwelfth, criteria.minDiploma)} | Your 12th/Diploma%: ${Math.max(student.twelfthPercentage, student.diplomaPercentage)}`
        },
        backlogs: {
            required: criteria.maxBacklogs,
            actual: student.backlogCount,
            pass: student.backlogCount <= criteria.maxBacklogs,
            label: `Max Backlogs: ${criteria.maxBacklogs} | Your Backlogs: ${student.backlogCount}`
        },
        branch: {
            required: criteria.allowedBranches.length > 0 ? criteria.allowedBranches.join(", ") : "Any",
            actual: student.branch,
            pass: criteria.allowedBranches.length === 0 || criteria.allowedBranches.includes(student.branch),
            label: `Allowed Branches: ${criteria.allowedBranches.length > 0 ? criteria.allowedBranches.join(", ") : "Any"} | Your Branch: ${student.branch}`
        },
        gradYear: {
            required: criteria.targetGradYear,
            actual: student.graduationYear,
            pass: student.graduationYear === criteria.targetGradYear,
            label: `Target Grad Year: ${criteria.targetGradYear} | Your Grad Year: ${student.graduationYear}`
        }
    };

    const isEligible = Object.values(matrix).every((criterion) => criterion.pass);

    return {
        matrix,
        isEligible
    };
};

module.exports = {
    checkEligibility
};
