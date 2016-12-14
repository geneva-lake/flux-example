package main

import (
	_ "fmt"
	_ "net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Static("/assets", "./assets")
	router.StaticFile("/index", "./assets/index.html")
	router.GET("/api/:number", getNumber)
	router.Run()
}

func getNumber(c *gin.Context) {
	num := c.Params.ByName("number")
	if num == "-1" {
		c.String(200, "minus one")
	} else {
		c.String(200, "one")
	}
}
