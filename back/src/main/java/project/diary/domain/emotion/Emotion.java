package project.diary.domain.emotion;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Emotion {

    @Id
    private String emotionId;
    private String emotionName;
}
