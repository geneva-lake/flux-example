package main

import (
	_ "fmt"
	_ "net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	//router.GET("/index", getting)
	router.Static("/assets", "./assets")
	router.StaticFile("/index", "./assets/index.html")
	router.Run()
}
