package project.diary.dto.user;

import project.diary.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserResponseDto {

    private int userId;
    private String userNickname;
    private String userPassword;

    public UserResponseDto(User entity) {
        this.userId = entity.getUserId();
        this.userNickname = entity.getUserNickname();
        this.userPassword = entity.getUserPassword();
    }
}