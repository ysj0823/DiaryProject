package project.diary.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDecodeJWTDTO {

    private String user_id;
    private String user_nickname;
    private String user_password;

}