import { CodeLinesStatisticDto } from '../dtos/code-lines-statistic.dto';
import ProjectLanguagesResponse from '../response-models/project-languages.response-model';
import UserResponse from '../response-models/user.response-model';

interface UserPageState {
    userData: UserResponse;
    commitsCount: number;
    codeLinesStatistic: CodeLinesStatisticDto;
    topLanguages: ProjectLanguagesResponse;
}

export default UserPageState;
