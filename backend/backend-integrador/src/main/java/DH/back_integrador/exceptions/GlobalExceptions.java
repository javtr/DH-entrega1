package DH.back_integrador.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptions {

    @ExceptionHandler({ResourceNotFoundException.class})
    public ResponseEntity<String> tratarErrorNotFound(ResourceNotFoundException ex){
        log.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage() + " - Desde: Global exceptions");
    }
}
