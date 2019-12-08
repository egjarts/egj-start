import config from '../../config/config';
import { WebClient } from '@slack/web-api';

const Slack = {
  web: new WebClient(config.slack.oauth.token)
};

export default Slack;
