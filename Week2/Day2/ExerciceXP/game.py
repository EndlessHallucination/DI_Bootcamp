class GameOfLife:
    def __init__(self, grid):
        self.grid = grid
        self.rows = len(grid)
        self.cols = len(grid[0])

    def display(self):
        for row in self.grid:
            print(" ".join(str(cell) for cell in row))
        print()  

    def count_neighbors(self, row, col):
        directions = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),         (0, 1),
            (1, -1), (1, 0), (1, 1)
        ]

        count = 0

        for dr, dc in directions:
            r = row + dr
            c = col + dc

            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]

            return count
        
    def next_generation(self):
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]

        for r in range(self.rows):
            for c in range(self.cols):
                neighbors = self.count_neighbors(r, c)
                cell = self.grid[r][c]

                if cell == 1:
                    if neighbors < 2:
                      new_grid[r][c] = 0
                    elif neighbors in [2, 3]:
                        new_grid[r][c] = 1
                    else:
                        new_grid[r][c] = 0
                else:
                    if neighbors == 3:
                        new_grid[r][c] = 1

        self.grid = new_grid


    def run(self, generations):
        for _ in range(generations):
            self.display()
            self.next_generation()

initial_grid = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]

game = GameOfLife(initial_grid)
game.run(5)