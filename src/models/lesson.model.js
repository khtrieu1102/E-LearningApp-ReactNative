function Lesson(entity) {
    if (!entity) return;
    this.id = entity.id;
    this.content = entity.content;
    this.hours = entity.hours;
    this.name = entity.name;
    this.nextLessonId = entity.nextLessonId;
    this.numberOrder = entity.numberOrder;
    this.prevLessonId = entity.prevLessonId;
    this.sectionId = entity.sectionId;
    this.videoName = entity.videoName;
    this.videoUrl = entity.videoUrl;
    this.currentTime = entity.currentTime;
    this.isFinish = entity.isFinish;
}

export default Lesson;