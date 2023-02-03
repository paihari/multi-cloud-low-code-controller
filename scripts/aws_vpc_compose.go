package inner

import (
	"context"
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
)

// the main must return (interface{}, error)

func main(cidrBlock string) (interface{}, error) {
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	
	client := ec2.NewFromConfig(cfg)

	output, err := client.CreateVpc(context.TODO(), &ec2.CreateVpcInput{
		CidrBlock: aws.String(cidrBlock),
	})
	fmt.Println(*&output.Vpc.VpcId)

  return output, nil
}