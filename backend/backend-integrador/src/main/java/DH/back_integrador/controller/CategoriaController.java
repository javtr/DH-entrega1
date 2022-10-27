package DH.back_integrador.controller;


import DH.back_integrador.exceptions.BadRequestException;
import DH.back_integrador.exceptions.ResourceNotFoundException;
import DH.back_integrador.model.Categoria;
import DH.back_integrador.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping
    public ResponseEntity<Categoria> saveCategoria(@RequestBody Categoria categoria) throws BadRequestException {
        return ResponseEntity.ok(categoriaService.saveCategoria(categoria));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscar(@PathVariable Integer id) {
        Categoria categoria = categoriaService.getCategoria(id);
        return ResponseEntity.ok(categoria);
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> getAllCategoria() {
        return ResponseEntity.ok(categoriaService.getAllCategoria());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCategoria(@PathVariable Integer id, @RequestBody Categoria categoria) throws ResourceNotFoundException {
        categoriaService.updateCategoria(id, categoria);
        return ResponseEntity.ok().body("Actualizado");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategoria(@PathVariable Integer id) throws ResourceNotFoundException {
        categoriaService.deleteCategoria(id);
        return ResponseEntity.ok().body("Eliminado");
        }

    @ExceptionHandler({BadRequestException.class})
    public ResponseEntity<String> procesarError(BadRequestException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
}
