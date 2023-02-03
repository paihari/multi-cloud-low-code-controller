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

func main(vpcId string) (interface{}, error) {
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	
	client := ec2.NewFromConfig(cfg)

	outputInternetGateway, err := client.CreateInternetGateway(context.TODO(),
	 &ec2.CreateInternetGatewayInput{
		
	})
  
  internetGatewayId := *outputInternetGateway.InternetGateway.InternetGatewayId

	fmt.Println(internetGatewayId)

  client.AttachInternetGateway(context.TODO(),
	 &ec2.AttachInternetGatewayInput{
     VpcId: aws.String(vpcId),
     InternetGatewayId: aws.String(internetGatewayId),
		
	})

  return outputInternetGateway, nil

  }  
