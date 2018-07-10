angular.module('app.constants', [])
.constant('API_URL', "https://api.topcoder-dev.com")
.constant('ADMIN_TOOL_URL', "https://api.topcoder-dev.com/v2")
.constant('API_VERSION_PATH', "v3")
.constant('COOKIES_SECURE', false)
.constant('AUTH_URL', "https://accounts.topcoder-dev.com/member")
.constant('ACCOUNTS_CONNECTOR_URL', "https://accounts.topcoder-dev.com/connector.html")
.constant('JWT_V3_NAME', "v3jwt")
.constant('JWT_V2_NAME', "tcjwt")
.constant('DIRECT_URL_BASE', "https://www.topcoder-dev.com/direct/projectOverview?formData.projectId=")
.constant('LABELS', ["Open for pickup","Assigned","Ready for review","Paid","Feedback","Fix accepted"])
.constant('LABELS_COLOR', ["112233","445566","123123","456456","ff0011","aabb11"])
.constant('HOOK_BASE_URL', "https://b9602b91.ngrok.io")
.constant('OWNER_LOGIN_GITHUB_URL', "/api/v1/github/owneruser/login")
.constant('OWNER_LOGIN_GITLAB_URL', "/api/v1/gitlab/owneruser/login");
