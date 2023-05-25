package project.diary.domain.advice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AdviceRepository extends JpaRepository<Advice, Long> {

    // emotion_id로 조언 리스트 조회
    List<Advice> findByAdviceEmotion(@Param("emotion") String emotion);

}
