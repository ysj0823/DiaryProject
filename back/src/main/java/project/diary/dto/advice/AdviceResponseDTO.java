package project.diary.dto.advice;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.diary.domain.advice.Advice;
import project.diary.domain.diary.Diary;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdviceResponseDTO {

    private String adviceId;
    private String adviceContent;
    private String adviceEmotion;

    public AdviceResponseDTO(Advice entity){
        this.adviceId = entity.getAdviceId();
        this.adviceContent = entity.getAdviceContent();
        this.adviceEmotion = entity.getAdviceEmotion();
    }
}
