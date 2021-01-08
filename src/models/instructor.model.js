function Instructor(entity) {
    if (!entity) return;
    this.avatar = entity.avatar;
    this.averagePoint = entity.averagePoint;
    this.countRating = entity.countRating;
    this.courses = entity.courses;
    this.createdAt = entity.createdAt;
    this.email = entity.email;
    this.id = entity.id;
    this.intro = entity.intro;
    this.major = entity.major;
    this.name = entity.name;
    this.phone = entity.phone;
    this.ratedNumber = entity.ratedNumber;
    this.skills = entity.skills;
    this.soldNumber = entity.soldNumber;
    this.totalCourse = entity.totalCourse;
    this.updatedAt = entity.updatedAt;
    this.userId = entity.userId;
}

export default Instructor;