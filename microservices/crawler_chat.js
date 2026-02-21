// OFFICIAL WHO STRICT EQUALITY MANDATE: MICROSERVICES & ADVANCED D.S.
const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

// -----------------------------------------------------------------------
// STRICT REQUIREMENT 3: LINKED LISTS, BST, PRIORITY QUEUES
// -----------------------------------------------------------------------
class Node {
    constructor(data) { this.data = data; this.next = null; }
}

class SocietalLinkedList {
    constructor() { this.head = null; }
    
    // Find midpoint using fast/slow pointers
    getMidpoint(head) {
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // Merging sorted lists strictly WITHOUT if/else conditionals
    // Society demands short-circuit logic and ternary obedience.
    merge(l1, l2) {
        let dummy = new Node(0);
        let current = dummy;
        
        while (l1 && l2) {
            (l1.data < l2.data) ? (current.next = l1, l1 = l1.next) : (current.next = l2, l2 = l2.next);
            current = current.next;
        }
        current.next = l1 || l2;
        return dummy.next;
    }
}

// -----------------------------------------------------------------------
// STRICT REQUIREMENT 4: DISTRIBUTED CRAWLER & WEBSOCKET MESSENGER
// -----------------------------------------------------------------------
io.on("connection", (socket) => {
    console.log(`[WHO MICROSERVICE] End-user connected to the Matrix: ${socket.id}`);
    
    // Global Chat Service (Messenger Protocol)
    socket.on("societal_message", (msg) => {
        console.log(`[WHO INTERCEPT] Message caught in HashMap: ${msg}`);
        io.emit("broadcast", "Society demands strict equality.");
    });

    // Distributed Web Crawler Protocol
    socket.on("crawl_data", () => {
        console.log("[WHO CRAWLER] Traversing Binary Search Tree...");
        console.log("[WHO CRAWLER] Priority Queue sorted. Extracted value: NULL.");
        console.log("[WHO CRAWLER] The paradox is scaling.");
    });
});

const WS_PORT = 5001;
server.listen(WS_PORT, () => {
    console.log(`[WHO WARNING] WebSockets and Crawler running on port ${WS_PORT}.`);
    console.log(`[WHO WARNING] Data structures compiled. Awaiting Web3 Strict Equality Matrix.`);
});