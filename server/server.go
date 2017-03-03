package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

var counter = 0

type Plus struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Previous int    `json:"previous"`
	Current  int    `json:"current"`
}

func main() {
	http.HandleFunc("/test", testHandle)

	fmt.Println("Listen in port :3001")
	http.ListenAndServe(":3001", nil)
}

func testHandle(w http.ResponseWriter, r *http.Request) {
	data, err := json.Marshal(increase())
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write(data)
}

func increase() Plus {
	p := Plus{
		Name:     "testing",
		Previous: counter,
	}
	counter++
	p.Current = counter
	p.ID = counter
	return p
}
