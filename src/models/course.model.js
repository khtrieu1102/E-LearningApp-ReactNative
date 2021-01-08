import Instructor from "./instructor.model"

function Course(entity) {
    if (!entity) return;
    this.id = entity.id;
    this.averagePoint = entity.averagePoint;
    this.contentPoint = entity.contentPoint;
    this.coursesLikeCategory = entity.coursesLikeCategory;
    this.createdAt = entity.createdAt;
    this.description = entity.description;
    this.formalityPoint = entity.formalityPoint;
    this.imageUrl = entity.imageUrl;
    this.instructor = new Instructor(entity.instructor);
    this.instructorId = entity.instructorId;
    this.isHidden = entity.isHidden;
    this.learnWhat = entity.learnWhat;
    this.presentationPoint = entity.presentationPoint;
    this.price = entity.price;
    this.promoVidUrl = entity.promoVidUrl;
    this.ratedNumber = entity.ratedNumber;
    this.ratings = entity.ratings;
    this.requirement = entity.requirement;
    this.section = entity.section;
    this.status = entity.status;
    this.subtitle = entity.subtitle;
    this.title = entity.title;
    this.totalHours = entity.totalHours;
    this.typeUploadVideoLesson = entity.typeUploadVideoLesson;
    this.updatedAt = entity.updatedAt;
    this.videoNumber = entity.videoNumber;
}

export default Course;