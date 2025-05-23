module github.com/aws/aws-sdk-go-v2/config

go 1.15

require (
	github.com/aws/aws-sdk-go-v2 v1.17.3
	github.com/aws/aws-sdk-go-v2/credentials v1.13.11
	github.com/aws/aws-sdk-go-v2/feature/ec2/imds v1.12.21
	github.com/aws/aws-sdk-go-v2/internal/ini v1.3.28
	github.com/aws/aws-sdk-go-v2/service/sso v1.12.0
	github.com/aws/aws-sdk-go-v2/service/ssooidc v1.14.0
	github.com/aws/aws-sdk-go-v2/service/sts v1.18.2
	github.com/aws/smithy-go v1.13.5
	github.com/google/go-cmp v0.5.8
)

replace github.com/aws/aws-sdk-go-v2 => ../

replace github.com/aws/aws-sdk-go-v2/credentials => ../credentials/

replace github.com/aws/aws-sdk-go-v2/feature/ec2/imds => ../feature/ec2/imds/

replace github.com/aws/aws-sdk-go-v2/internal/configsources => ../internal/configsources/

replace github.com/aws/aws-sdk-go-v2/internal/endpoints/v2 => ../internal/endpoints/v2/

replace github.com/aws/aws-sdk-go-v2/internal/ini => ../internal/ini/

replace github.com/aws/aws-sdk-go-v2/service/internal/presigned-url => ../service/internal/presigned-url/

replace github.com/aws/aws-sdk-go-v2/service/sso => ../service/sso/

replace github.com/aws/aws-sdk-go-v2/service/ssooidc => ../service/ssooidc/

replace github.com/aws/aws-sdk-go-v2/service/sts => ../service/sts/
